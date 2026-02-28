import { Header } from "./components/header";
import { toggleSubnav } from "./state/componentsStates";

const root = document.querySelector("#app");
root.appendChild(Header());

const header = root.querySelector("header");
const subnav = header.querySelector(".subnav");
subnav.addEventListener("click", toggleSubnav(subnav))
