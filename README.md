# YET-ANOTHER-YOGA-LAYOUT-FORK

## Features

- latest `yoga-layout` with `flex-gap`
- build with `emscripten`
- provides `wasm` / `asm` / `asmSync` bundles for better performance or simple use

## Usage

```bash
npm install jeetiss/yet-another-yoga-layout-fork
```

#### asm

```js
import initYoga from "yet-another-yoga-layout-fork/asm";

const Yoga = await initYoga();
```

#### asmSync

```js
import initYoga from "yet-another-yoga-layout-fork/asmSync";

const Yoga = initYoga();
```

#### wasm (browser)

```js
import initYoga from "yet-another-yoga-layout-fork";

const Yoga = await initYoga(
  await fetch(URL("yet-another-yoga-layout-fork/dist/yoga.wasm", import.meta))
);
```

#### wasm (node)

```js
import { readFile } from "node:fs/promises";
import initYoga from "yet-another-yoga-layout-fork";

const Yoga = await initYoga(
  await readFile(
    URL("yet-another-yoga-layout-fork/dist/yoga.wasm", import.meta)
  )
);
```

## Size

| bundle                               | size (JS + WASM) gzip |
| ------------------------------------ | --------------------- |
| yoga-layout-prebuilt                 | 79.23 kB              |
| yet-another-yoga-layout-fork/asm     | 46.67 kB              |
| yet-another-yoga-layout-fork/asmSync | 46.62 kB              |
| yet-another-yoga-layout-fork/wasm    | 10.4  kB + 29.42 kB   |

## Perf

```bash
Stack with flex
  - yoga-layout-prebuilt: 45.4ms (183.06%)
  - yet-another-yoga-layout-fork/asm: 36.6ms (147.58%)
  - yet-another-yoga-layout-fork/asmSync: 38.4ms (154.84%)
  - yet-another-yoga-layout-fork/wasm: 24.8ms (100%)

Align stretch in undefined axis
  - yoga-layout-prebuilt: 47.1ms (173.8%)
  - yet-another-yoga-layout-fork/asm: 40.3ms (148.71%)
  - yet-another-yoga-layout-fork/asmSync: 41.1ms (151.66%)
  - yet-another-yoga-layout-fork/wasm: 27.1ms (100%)

Nested flex
  - yoga-layout-prebuilt: 23.4ms (133.71%)
  - yet-another-yoga-layout-fork/asm: 25ms (142.86%)
  - yet-another-yoga-layout-fork/asmSync: 26ms (148.57%)
  - yet-another-yoga-layout-fork/wasm: 17.5ms (100%)

Huge nested layout
  - yoga-layout-prebuilt: 23.6ms (126.88%)
  - yet-another-yoga-layout-fork/asm: 24.2ms (130.11%)
  - yet-another-yoga-layout-fork/asmSync: 24.9ms (133.87%)
  - yet-another-yoga-layout-fork/wasm: 18.6ms (100%)
```

## Acknowledgements

This is an opinionated fork from [shuding/yoga-wasm-web](https://github.com/shuding/yoga-wasm-web)
