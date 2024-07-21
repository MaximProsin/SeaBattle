/* @refresh reload */
import { render } from "solid-js/web";

import "@fontsource/inter";
import "./index.css";
import { App } from "./app/app";

const root = document.getElementById("root");

render(() => <App />, root!);
