/**
 * Style an element to hidden
 */
function styleHidden (elem) {
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a
    // flash, so some of these are just precautions. However in
    // Internet Explorer the element is visible whilst the popup
    // box asking the user for permission for the web page to
    // copy to the clipboard.
    //
    // Place in top-left corner of screen regardless of scroll position.
    elem.style.position = "fixed";
    elem.style.top = 0;
    elem.style.left = 0;
    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    elem.style.width = "2em";
    elem.style.height = "2em";
    // We don't need padding, reducing the size if it does flash render.
    elem.style.padding = 0;
    // Clean up any borders.
    elem.style.border = "none";
    elem.style.outline = "none";
    elem.style.boxShadow = "none";
    // Avoid flash of white box if rendered for any reason.
    elem.style.background = "transparent";
    elem.style.color = "transparent";
    elem.style.visibility = "hidden";
}

/**
 * download file to local
 * @param {Uint8Array} data 
 * @param {string} name 
 */
export const download = (data, name) => {
    const blob = new Blob([ data.buffer ], {
        type: "application/octet-stream"
    });
    const a = document.createElement("a");
    styleHidden(a);
    a.download = name;
    a.href = URL.createObjectURL(blob);
    a.click();
};

/**
 * copy text to clipboard
 * @param {string} text
 * @returns {boolean}
 */
export const saveToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    styleHidden(textArea);
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        return successful;
    } catch (err) {
        document.body.removeChild(textArea);
        console.error(err);
        return false;
    }
};

/**
 * open a local file. may return undefined
 * @param {string} accept
 * @param {number} [timeout=300000]
 * @returns {Promise<File|undefined>}
 */
export const openLocalFile = (accept = "*/*", timeout = 300000) => {
    return new Promise((resolve) => {
        const ip = document.createElement("input");
        styleHidden(ip);
        ip.type = "file";
        ip.accept = accept;
        const fileChanged = () => {
            clearTimeout(timerId);
            ip.removeEventListener("change", fileChanged);
            const files = ip.files;
            if (files.length <= 0) {
                resolve(undefined);
                return;
            }
            const file = files[ 0 ];
            resolve(file);
        };
        const timerId = setTimeout(() => {
            ip.removeEventListener("change", fileChanged);
            resolve(undefined);
        }, timeout);
        ip.addEventListener("change", fileChanged);
        ip.click();
    });
};

/**
 * read a file object.
 * @param {File} file
 * @returns {Promise<string>}
 */
export const readFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            resolve(reader.result);
        });
        reader.addEventListener("error", () => {
            reject(reader.error);
        });
        reader.readAsText(file);
    });
};
