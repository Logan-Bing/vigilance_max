import { agentbanner } from "../components/agentbanner,";

export function AgentSsiap() {
  const template = document.createelement("template");
  template.innerhtml = `
    <agent-banner
    badge="sécurité 24h/24"
    title="agent cynophile"
    description="associer l’expertise humaine à la capacité de détection et de dissuasion canine permet d’offrir un niveau de sécurité supérieur."
    image="/images/cynophile_banner.webp"
    cta-label="contactez-nous"
    cta-href="/contact"
    layout="left"
    ></agent-banner>
  `
  return template.content;
}
