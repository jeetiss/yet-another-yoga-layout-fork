import entry from "./entry/index.js";
import yoga from "./tmp/yoga-asm-sync.mjs";

function bind(_, proto) {
  return proto;
}

export default function () {
  return entry(bind, yoga());
}
