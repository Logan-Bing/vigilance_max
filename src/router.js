import { Header } from "./components/static/header";
import { Footer } from "./components/static/footer";
import { Home } from "./pages/home";
import { AgentCynophile } from "./pages/agent_cynophile";
import { Contact } from "./pages/contact";
import { Success } from "./pages/success";

const root = document.querySelector("#app");
root.appendChild(Header());

const outlet = document.createElement("main");
root.appendChild(outlet);
root.appendChild(Footer());

const routes = [
  { path: "/", handle: Home },
  { path: "/agent_cynophile", handle: AgentCynophile },
  { path: "/agent_rondier", handle: AgentCynophile },
  { path: "/agent_intervention", handle: AgentCynophile },
  { path: "/agent_ssiap", handle: AgentCynophile },
  { path: "/Contact", handle: Contact },
  { path: "/Success", handle: Success },
]
const current_path = window.location.pathname;
for (const route of routes) {
  if (route.path === current_path)
    outlet.appendChild(route.handle());
}

