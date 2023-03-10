import { alertDialog, showLoadingDialog, hideLoadingDialog, withLoadingDialog } from "./base.js";
import { download, openLocalFile, readFile } from "./save.js";
import { gameContext, isBusy, alertText, setEntryURL, setGameContext, nextGameContext, setAlertText } from "./store.js";

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
                showLoadingDialog();
            } else {
                hideLoadingDialog();
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

const progressSave = () => {
    const dataText = JSON.stringify(gameContext.get());
    const data = (new TextEncoder()).encode(dataText);
    download(data, "game.sav");
};

const progressLoad = async () => {
    const file = await openLocalFile(".sav");
    const text = await readFile(file);
    try {
        const state = JSON.parse(text);
        if ((!state.data) || (!state.message)) {
            throw new Error("??????????????????!");
        }
        setGameContext(state);
    } catch (err) {
        console.error(err);
        await alertDialog("????????????!");
    }
};

// main
const init = async () => {
    // setup elements
    initElements();
    // get entry url
    const url = new URL(self.location);
    const entryURL = url.searchParams.get("entry");
    if (!entryURL) {
        setAlertText("??????????????????!");
        return;
    }
    setEntryURL(entryURL);
    console.log(entryURL);
    // binding button callback
    document.querySelector("#btn_save").addEventListener("click", progressSave);
    document.querySelector("#btn_load").addEventListener("click", progressLoad);
    // start new game
    await nextGameContext(-1);
};
self.addEventListener("load", () => {
    withLoadingDialog(init);
});
