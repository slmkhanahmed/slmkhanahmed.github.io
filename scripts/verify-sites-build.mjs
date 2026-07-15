import { readFile } from "node:fs/promises";
import { extname, resolve } from "node:path";
import assert from "node:assert/strict";
import worker from "../dist/server/index.js";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".xml": "application/xml; charset=utf-8",
};

const assets = {
  async fetch(request) {
    const pathname = decodeURIComponent(new URL(request.url).pathname);
    const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\//, "");
    const absolutePath = resolve("dist", "client", relativePath);

    try {
      const body = await readFile(absolutePath);
      return new Response(body, {
        status: 200,
        headers: { "content-type": contentTypes[extname(absolutePath)] ?? "application/octet-stream" },
      });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  },
};

const home = await worker.fetch(
  new Request("https://portfolio.test/", { headers: { accept: "text/html" } }),
  { ASSETS: assets }
);
assert.equal(home.status, 200);
assert.match(home.headers.get("content-type") ?? "", /^text\/html/);
assert.match(await home.text(), /Salman Ahmed Khan/);

const deepLink = await worker.fetch(
  new Request("https://portfolio.test/work", { headers: { accept: "text/html" } }),
  { ASSETS: assets }
);
assert.equal(deepLink.status, 200);
assert.match(await deepLink.text(), /<div id="root"><\/div>/);

const missingAsset = await worker.fetch(
  new Request("https://portfolio.test/missing.png", { headers: { accept: "image/png" } }),
  { ASSETS: assets }
);
assert.equal(missingAsset.status, 404);

console.log("Verified static assets and SPA fallback behavior.");
