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

## Size & Perf

| bundle                               | size (JS + WASM) gzip |
| ------------------------------------ | --------------------- |
| yoga-layout-prebuilt                 | 79.23 kB              |
| yet-another-yoga-layout-fork/asm     | 46.67 kB              |
| yet-another-yoga-layout-fork/asmSync | 46.62 kB              |
| yet-another-yoga-layout-fork/wasm    | 10.4  kB + 25.85 kB   |

## Acknowledgements

This is an opinionated fork from [shuding/yoga-wasm-web](https://github.com/shuding/yoga-wasm-web)
