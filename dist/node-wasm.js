import { readFile } from 'node:fs/promises';

var nodeWasm = () => readFile(new URL("./yoga.wasm", import.meta.url));

export { nodeWasm as default };
