import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./layout/App/App";
import * as serviceWorker from "./serviceWorker";

import potpack from "./algoritm";

const blocks = [
  { w: 100, h: 100 },
  { w: 200, h: 100 },
  { w: 80, h: 80 },
  { w: 80, h: 80 }
];
const { w, h, fill } = potpack(blocks);
console.log("w", w);
console.log("h", h);
console.log("fill", fill);
console.log("blocks", blocks);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
