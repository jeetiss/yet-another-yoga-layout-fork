export default () =>
  fetch(new URL("./tmp/yoga.wasm", import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
