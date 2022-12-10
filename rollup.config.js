import terser from "@rollup/plugin-terser";
import flowRemoveTypes from "flow-remove-types";
import { createFilter } from "@rollup/pluginutils";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: ["asm.js", "index.js"],
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [
      flow({
        pretty: true,
        include: ["entry/index.js", "yoga/javascript/sources/YGEnums.js"],
      }),
      commonjs(),
      terser(),
    ],
  },
];

function flow(options) {
  options = options || {};
  var filter = createFilter(options.include, options.exclude);

  return {
    name: "flow-remove-types",
    transform: function (code, id) {
      if (filter(id)) {
        var transformed = flowRemoveTypes(code, options);

        return {
          code: transformed.toString(),
          map: transformed.generateMap(),
        };
      }
    },
  };
}
