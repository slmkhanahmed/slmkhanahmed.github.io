import { access, copyFile, cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "build");
const output = resolve(root, "dist");

await access(resolve(source, "index.html"));
await rm(output, { recursive: true, force: true });
await mkdir(resolve(output, "server"), { recursive: true });
await cp(source, resolve(output, "client"), { recursive: true });
await copyFile(resolve(root, "worker", "sites-static.js"), resolve(output, "server", "index.js"));
await copyFile(resolve(root, "worker", "package.json"), resolve(output, "server", "package.json"));

console.log("Prepared the Sites-compatible build in dist/.");
