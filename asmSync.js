import wrapAsm from "./yoga/javascript/src_js/wrapAsm.js";
import yoga from "./tmp/yoga-asm-sync.mjs";

export default function () {
  return wrapAsm(yoga());
}
