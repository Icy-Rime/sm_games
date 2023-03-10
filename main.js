import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import { serveDir, serveFile } from "https://deno.land/std@0.178.0/http/file_server.ts";

const responseJSON = (data) => {
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
};

serve(async (req) => {
    const pathname = new URL(req.url).pathname;
    if (pathname.startsWith("/static")) {
        return await serveDir(req, {
            urlRoot: "static",
            fsRoot: "./static",
        });
    } else if (pathname == "/" || pathname == "index.html") {
        return await serveFile(req, "./index.html");
    }
    // Do dynamic responses
    if (pathname.startsWith("/games/")) {
        const gamename = pathname.substring("/games/".length).replaceAll(".", "_");
        if (req.method == "POST") {
            try {
                const gmodule = await import(`./games/${gamename}.js`);
                const data = gmodule.default(await req.json());
                if (data instanceof Promise) {
                    return responseJSON(await data);
                } else {
                    return responseJSON(data);
                }
            } catch (err) {
                console.error(err);
            }
        } else if (req.method == "OPTIONS") {
            return new Response("200 OK", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": req.headers.get("Access-Control-Request-Headers"),
                    "Access-Control-Max-Age": "86400",
                }
            });
        }
        return new Response("Failed.", { status: 500 });
    }
    return new Response();
});
