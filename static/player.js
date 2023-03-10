import { alertDialog, withLoadingDialog } from "./base.js";
import { gameContext, isBusy, alertText, setEntryURL, nextGameContext, setAlertText } from "./store.js";

const callbackActionButton = async (event) => {
    const action = Number.parseInt(event.target.dataset.action);
    await nextGameContext(action);
};

const initElements = () => {
    gameContext.listen(
        /** @param {import("../types/game_context.d.ts").GameContextRecive} newValue */
        (newValue) => {
            document.title = newValue.title;
            document.querySelector("#p_title").innerText = newValue.title;
            document.querySelector("#p_message").innerText = newValue.message;
            const buttonContainer = document.querySelector("#c_options");
            buttonContainer.innerHTML = "";
            newValue.options.forEach((option, index) => {
                const outerDiv = document.createElement("div");
                outerDiv.classList.add("c_button");
                const button = document.createElement("button");
                button.innerText = option;
                button.dataset.action = index.toString();
                button.addEventListener("click", callbackActionButton);
                outerDiv.append(button);
                buttonContainer.append(outerDiv);
            });
        }
    );
    isBusy.listen(
        /** @param {boolean} isBusyValue */
        (isBusyValue) => {
            if (isBusyValue) {
                document.querySelectorAll("#c_options button").forEach((elem) => {
                    elem.classList.add("hidden");
                });
            } else {
                document.querySelectorAll("#c_options button").forEach((elem) => {
                    elem.classList.remove("hidden");
                });
            }
        }
    );
    alertText.listen(
        /** @param {string} text */
        async (text) => {
            if (text.length > 0) {
                await alertDialog(text);
                setAlertText("");
            }
        }
    );
};

// main
const init = async () => {
    // setup elements
    initElements();
    // get entry url
    const url = new URL(self.location);
    const entryURL = url.searchParams.get("entry");
    if (!entryURL) {
        setAlertText("游戏入口无效!");
        return;
    }
    setEntryURL(entryURL);
    console.log(entryURL);
    // start new game
    await nextGameContext(-1);
};
self.addEventListener("load", () => {
    withLoadingDialog(init);
});
