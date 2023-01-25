import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: ["asm.js", "index.js", "asmSync.js"],
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [commonjs(), terser({ compress: { passes: 2 } })],
  },
];
