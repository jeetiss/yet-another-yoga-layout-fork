import { readFile } from "node:fs/promises";

let Yoga;

if (process.env.YOGA_BUILD === "asm") {
  Yoga = await (await import("../dist/asm")).default();
} else if (process.env.YOGA_BUILD === "asmSync") {
  Yoga = (await import("../dist/asmSync")).default();
} else {
  const [{ default: initWasm }, bin] = await Promise.all([
    import("../dist/index"),
    readFile(new URL("../dist/yoga.wasm", import.meta.url)),
  ]);

  Yoga = await initWasm(bin);
}

export { Yoga };

