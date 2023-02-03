import { decode } from "simple-yenc/src/simple-yenc.mjs";
import initYoga from "./index.js";
import wasm from "./tmp/yoga.wasm";

export * from "./yoga/javascript/src_js/generated/YGEnums.js";
export default () => initYoga(decode(wasm));
