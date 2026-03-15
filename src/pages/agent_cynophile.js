import { AgentBanner } from "../components/agentBanner";
import { Benefits } from "../components/static/benefits";

export function AgentCynophile() {
  const template = document.createElement("template");
  template.innerHTML = `
  <section id=cynophile-page class="overflow-x-hidden flex flex-col gap-8 xl:gap-32">
    <agent-banner
    badge="Sécurité 24h/24"
    title="Agent Cynophile"
    description="Associer l’expertise humaine à la capacité de détection et de dissuasion canine permet d’offrir un niveau de sécurité supérieur."
    image="/images/Cynophile_banner.webp"
    cta-label="Contactez-nous"
    cta-href="/contact"
    layout="left"
    ></agent-banner>
    <media-block 
        header-title="A propos" 
        title="À propos de Vigilence Max"
        first-content="Chez Vigilence Max, nous assurons la protection des biens, des infrastructures et des personnes avec rigueur, professionnalisme et réactivité."
        second-content="Nous intervenons auprès des entreprises, des chantiers, des commerces et des sites industriels en mettant en place des dispositifs de sécurité adaptés à chaque environnement"
        src="./public/images/0_about.webp" alt="image"
        info-1="Une présence continue pour une sécurité sans interruption."
        info-2="Personnel formé, certifié et expérimenté." 
        info-3="Réactivité immédiate en cas d’incident">
    </media-block>
  </section>
  `

  const section = template.content.querySelector("section");
  const mediaBlock = section.querySelector("media-block");
  mediaBlock.after(Benefits());
  return template.content;
}
