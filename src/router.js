import { Header } from "./components/static/header";
import { Footer } from "./components/static/footer";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Success } from "./pages/success";
import { AgentCynophile } from "./pages/agent_cynophile";
import { AgentSecurite } from "./pages/agent_securite";
import { AgentRondier } from "./pages/agent_rondier";
import { AgentSSIAP } from "./pages/agent_ssiap";
import { AgentKeys } from "./pages/agent_keys";
import { AgentTrafic } from "./pages/agent_trafic";

const root = document.querySelector("#app");
root.appendChild(Header());

const outlet = document.createElement("main");
root.appendChild(outlet);
root.appendChild(Footer());

const routes = [
  { path: "/", handle: Home },
  { path: "/agent_cynophile", handle: AgentCynophile },
  { path: "/agent_securite", handle: AgentSecurite },
  { path: "/agent_rondier", handle: AgentRondier },
  { path: "/agent_ssiap", handle: AgentSSIAP },
  { path: "/agent_homme_cles", handle: AgentKeys },
  { path: "/agent_homme_trafic", handle: AgentTrafic },
  { path: "/Contact", handle: Contact },
  { path: "/Success", handle: Success },
]
const current_path = window.location.pathname;
for (const route of routes) {
  if (route.path === current_path)
    outlet.appendChild(route.handle());
}

