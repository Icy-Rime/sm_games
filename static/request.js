
/**
 * 
 * @param {number} timeout 
 * @param {AbortController} controller 
 * @returns {Promise<Response>}
 */
const timeoutPromise = (timeout, controller) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Response("504 Gateway Timeout (Fetch Timeout)", { status: 504, statusText: "Gateway Timeout" }));
            controller.abort();
        }, timeout);
    });
};

const requestPromise = (url, payloadObj, signal) => {
    return fetch(url, {
        signal: signal,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(payloadObj),
    });
};

export const request = async (entryURL, context) => {
    const controller = new AbortController();
    const signal = controller.signal;

    const resp = await Promise.race([ timeoutPromise(1000, controller), requestPromise(entryURL, context, signal) ]);
    if (resp.status != 200) {
        throw new Error(resp);
    }
    const data = await resp.json();
    return data;
};
