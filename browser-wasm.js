export default () =>
  fetch(new URL("./yoga.wasm", import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
