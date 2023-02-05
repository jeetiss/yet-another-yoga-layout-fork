import { readFile } from "node:fs/promises";

export default () => readFile(new URL("./tmp/yoga.wasm", import.meta.url));
