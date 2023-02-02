import wrapAsm from "./yoga/javascript/src_js/wrapAsm.js";
import yoga from "./tmp/yoga.mjs";
export * from "./yoga/javascript/src_js/generated/YGEnums.js";

export default function (wasm) {
  return yoga({
    instantiateWasm(info, receive) {
      WebAssembly.instantiate(wasm, info).then(({ instance }) => {
        receive(instance);
      });
    },
  }).then((mod) => wrapAsm(mod));
}
