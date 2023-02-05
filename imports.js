import getWasm from "#wasm";
import initYoga from "./index.js";

export * from "./index.js";
export default () => getWasm().them((wasm) => initYoga(wasm));
