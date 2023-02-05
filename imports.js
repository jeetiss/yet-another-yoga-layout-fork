import getWasm from "#wasm";
import initYoga from "./index.js";

export * from "./index.js";
export default () => getWasm().then((wasm) => initYoga(wasm));
