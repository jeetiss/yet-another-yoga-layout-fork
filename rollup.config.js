import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

import { createFilter } from "@rollup/pluginutils";
import { dynamicEncode } from "simple-yenc/src/simple-yenc.mjs";
import { readFileSync } from "fs";

function yEncode(opts = {}) {
  if (!opts.include) {
    throw Error("include option must be specified");
  }

  const filter = createFilter(opts.include, opts.exclude);
  const strQuote = "`";
  return {
    name: "yEncode",
    load(id) {
      if (filter(id)) {
        const fileData = readFileSync(id);
        const decode = dynamicEncode(fileData, strQuote);
        return ["export default String.raw", strQuote, decode, strQuote].join(
          ""
        );
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
    plugins: [
      yEncode({ include: "tmp/yoga.wasm" }),
      nodeResolve(),
      commonjs(),
      terser({ compress: { passes: 2 } }),
    ],
  },
];
