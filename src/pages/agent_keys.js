import { AgentBanner } from "../components/agentBanner";
import { Benefits } from "../components/static/benefits";
import { AgentCard } from "../components/agentCard";
import { Carousel } from "../components/carousel";

export function AgentKeys() {
  const template = document.createElement("template");
  template.innerHTML = `
  <section id=cynophile-page class="overflow-x-hidden flex flex-col gap-8 xl:gap-32">
    <agent-banner
    badge="Sécurité 24h/24"
    title="Homme clés"
    description="Garant de la sécurité en dehors des heures d’ouverture, l’homme clés assure l’accès, la surveillance et la gestion des sites en toute autonomie."
    image="/images/Keys_banner.webp"
    cta-label="Contactez-nous"
    cta-href="/contact"
    layout="right"
    ></agent-banner>
    <media-block 
        header-title="homme cles" 
        title="Une présence de confiance en toute autonomie"
        first-content="L’homme clés intervient en dehors des horaires d’activité pour assurer l’ouverture, la fermeture et la sécurisation des sites. Totalement autonome, il détient la responsabilité des accès et agit selon des procédures strictes."
        second-content="Sa fiabilité et sa rigueur garantissent une gestion sécurisée des lieux, même en l’absence de personnel sur site."
        src="./images/Keys_card.webp" alt="image"
        info-1="Ouverture et fermeture des sites"
        info-2="Gestion sécurisée des accès" 
        info-3="Intervention en toute autonomie">
    </media-block>
    <div class="container carousel-cards">
      <div class="flex items-center justify-center">
        <agent-card
        title="Agent cynophile"
        content="En savoir plus sur l'agent cynophile..."
        src="/images/Cynophile_card.webp"
        alt="Agent Cynoophile"
        href="/agent_cynophile">
        </agent-card>
      </div>
      <div class="flex items-center justify-center">
        <agent-card
        title="Agent Rondier"
        content="En savoir plus sur l'agent rondier..."
        src="/images/Rondier_card.webp"
        alt="Agent Rondier"
        href="/agent_rondier">
        </agent-card>
      </div>
      <div class="flex items-center justify-center">
        <agent-card
        title="Agent SSIAP"
        content="En savoir plus sur l'agent SSIAP..."
        src="/images/SSIAP_card.webp"
        alt="Agent SSIAP"
        href="/agent_ssiap">
        </agent-card>
      </div>
      <div class="flex items-center justify-center">
        <agent-card
        title="Agent Homme Trafic"
        content="En savoir plus sur l'agent trafic..."
        src="/images/Trafic_card.webp"
        alt="Agent Homme Trafic"
        href="/agent_homme_trafic">
        </agent-card>
      </div>
      <div class="flex items-center justify-center">
        <agent-card
        title="Agent de Sécurité & de Prévention"
        content="En savoir plus sur l'agent de sécurité..."
        src="/images/Security_card.webp"
        alt="Agent de Sécurité"
        href="/agent_securite">
        </agent-card>
      </div>
    </div>
    <media-block 
      header-title="Missions" 
      title="Les missions de l'Homme clés"
      first-content="L’homme clés assure la gestion des accès et la sécurisation des sites en dehors des horaires d’ouverture. Il réalise les opérations d’ouverture et de fermeture et veille au respect des consignes de sécurité."
      second-content="En cas d’anomalie, il intervient rapidement et met en œuvre les actions nécessaires pour garantir l’intégrité des lieux."
      src="./images/Keys_missions.webp" alt="image"
      info-1="Ouverture et fermeture sécurisées"
      info-2="Vérification des accès et des installations" 
      info-3="Surveillance ponctuelle du site">
    </media-block>
  </section>
  `

  const section = template.content.querySelector("section");
  const mediaBlock = section.querySelector("media-block");
  mediaBlock.after(Benefits());
  const carousel = section.querySelector(".carousel-cards");
  new Carousel(carousel, { slideView: 3, slideToScroll: 2 })

  const contactSection = document.querySelector("#contact-section").content.cloneNode(true);
  section.appendChild(contactSection);

  return template.content;
}
