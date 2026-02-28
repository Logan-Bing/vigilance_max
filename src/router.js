import { Header } from "./components/header";
import { Button } from "./components/atomes/button";

const root = document.querySelector("#app");
root.appendChild(Header([
  { href: "/", label: "Gardiennage Humnain" },
  { href: "/contact", label: "Contact" },
]));
