var browserWasm = () =>
  fetch(new URL("./yoga.wasm", import.meta.url)).then((res) =>
    res.arrayBuffer()
  );

export { browserWasm as default };
