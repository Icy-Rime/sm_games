
import { request } from "./request.js";
// import { atom, action } from "https://cdn.skypack.dev/nanostores@0.7.4";
import { atom, action } from "https://cdn.skypack.dev/pin/nanostores@v0.7.4-UdWYb0fRurhRs8WZ3KDZ/mode=imports,min/optimized/nanostores.js";

// store
export const gameContext = atom({
    title: "",
    message: "",
    options: [],
    data: {},
});
export const isBusy = atom(false);
export const entryURL = atom("");
export const alertText = atom("");

// action
export const setGameContext = action(gameContext, "setGameContext", (gameContext, newValue) => { gameContext.set(newValue); });
export const setIsBusy = action(isBusy, "setIsBusy", (isBusy, newValue) => { isBusy.set(newValue); });
export const setEntryURL = action(entryURL, "setEntryURL", (entryURL, newValue) => { entryURL.set(newValue); });
export const setAlertText = action(alertText, "setAlertText", (alertText, newValue) => { alertText.set(newValue); });
export const nextGameContext = action(gameContext, "nextGameContext",
    async (gameContext, actionNumber) => {
        if (isBusy.get()) {
            return;
        }
        setIsBusy(true);
        try {
            /** @type {import("../types/game_context.d.ts").GameContextSend} */
            const sendData = {
                action: actionNumber,
                data: gameContext.get().data,
            };
            /** @type {import("../types/game_context.d.ts").GameContextRecive} */
            const resp = await request(entryURL.get(), sendData);
            setGameContext(resp);
        } catch (err) {
            console.error(err);
            setAlertText("Network Error.");
        } finally {
            setIsBusy(false);
        }
    }
);
