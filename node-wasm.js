import { readFile } from "node:fs/promises";

export default () => readFile(new URL("./yoga.wasm", import.meta.url));
