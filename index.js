import entry from "./entry/index.js";
import yoga from "./tmp/yoga.mjs";

function bind(_, proto) {
  return proto;
}

export default function (wasm) {
  return yoga({
    instantiateWasm(info, receive) {
      WebAssembly.instantiate(wasm, info).then((instance) => {
        receive(instance.instance || instance);
      });
    },
  }).then((mod) => entry(bind, mod));
}

export function initStreaming(response) {
  return yoga({
    instantiateWasm(info, receive) {
      WebAssembly.instantiateStreaming(response, info).then((instance) => {
        receive(instance.instance || instance);
      });
    },
  }).then((mod) => entry(bind, mod));
}
