import { Header } from "./components/static/header";
import { Home } from "./pages/home";

const root = document.querySelector("#app");
root.appendChild(Header());

const outlet = document.createElement("main");
root.appendChild(outlet);

const routes = [
  {
    path: "/",
    handle: Home
  }
]
const current_path = window.location.pathname;
for (const route of routes) {
  if (route.path === current_path)
    outlet.innerHTML = route.handle();
}

