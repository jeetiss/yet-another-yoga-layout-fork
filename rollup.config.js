import { readFileSync } from "fs";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import { dynamicEncode } from "simple-yenc";

const template = ({ quote, wasm }) =>
  Buffer.concat(
    ["const wasm = String.raw", quote, wasm, quote, ";export default wasm"].map(
      Buffer.from
    )
  );

function yenc(options = {}) {
  return {
    name: "yenc",

    load(id) {
      if (id.slice(-5) !== ".wasm") return null;

      try {
        const wasmBuffer = readFileSync(id);

        const dynEncodedWasm = {
          wasm: dynamicEncode(wasmBuffer, "`"),
          quote: "`",
        };

        return template(dynEncodedWasm).toString();
      } catch (err) {
        const message = "Could not parse JSON file";
        this.error({ message, id, cause: err });
        return null;
      }
    },
  };
}

export default [
  {
    input: ["asm.js", "index.js", "asmSync.js", "compat.js"],
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [commonjs(), yenc(), terser({ compress: { passes: 2 } })],
    external: ["simple-yenc"],
  },
];
