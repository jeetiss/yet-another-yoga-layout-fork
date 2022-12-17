import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import vm from "node:vm";

import { getMeasureCounter } from "../tools.js";

let WARMUP_ITERATIONS = 3;
let BENCHMARK_ITERATIONS = 10;

let testFiles = process.argv.slice(2).map((file) => {
  return readFileSync(file).toString();
});

let testResults = new Map();

const init = async (type) => {
  if (type === "asm") {
    return await (await import("../../dist/asm.js")).default();
  } else if (type === "asmSync") {
    return (await import("../../dist/asmSync.js")).default();
  } else if (type === "yoga-layout-prebuilt") {
    const { default: Yoga } = await import("yoga-layout-prebuilt");
    return Yoga;
  } else {
    const [{ default: initWasm }, bin] = await Promise.all([
      import("../../dist/index.js"),
      readFile(new URL("../../dist/yoga.wasm", import.meta.url)),
    ]);

    return await initWasm(bin);
  }
};

for (let type of ["asm", "asmSync", "wasm", "yoga-layout-prebuilt"]) {
  for (let file of testFiles) {
    vm.runInNewContext(
      file,
      Object.assign(Object.create(global), {
        Yoga: await init(type),
        getMeasureCounter,
        YGBENCHMARK: function (name, fn) {
          let testEntry = testResults.get(name);

          if (testEntry === undefined)
            testResults.set(name, (testEntry = new Map()));

          for (let t = 0; t < WARMUP_ITERATIONS; ++t) fn();

          let start = Date.now();

          for (let t = 0; t < BENCHMARK_ITERATIONS; ++t) fn();

          let end = Date.now();

          testEntry.set(type, (end - start) / BENCHMARK_ITERATIONS);
        },
      })
    );
  }
}

console.log(
  `Note: those tests are independants; there is no time relation to be expected between them`
);

for (let [name, results] of testResults) {
  console.log();

  let min = Math.min(Infinity, ...results.values());

  console.log(name);

  for (let [type, result] of results) {
    console.log(
      `  - ${type}: ${result}ms (${Math.round((result / min) * 10000) / 100}%)`
    );
  }
}
