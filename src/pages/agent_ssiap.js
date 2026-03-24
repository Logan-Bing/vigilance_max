import { AgentBanner } from "../components/agentBanner";
import { Benefits } from "../components/static/benefits";
import { AgentCard } from "../components/agentCard";
import { Carousel } from "../components/carousel";

export function AgentSSIAP() {
  const template = document.createElement("template");
  template.innerHTML = `
  <section id=ssiap-page class="overflow-x-hidden flex flex-col gap-8 xl:gap-32">
    <agent-banner
    badge="Sécurité 24h/24"
    title="Agent SSIAP"
    description="Spécialiste de la sécurité incendie, l’agent SSIAP assure la prévention des risques, la protection des personnes et la gestion des situations d’urgence."
    image="/images/SSIAP_banner.webp"
    cta-label="Contactez-nous"
    cta-href="/Contact"
    layout="right"
    ></agent-banner>
    <media-block 
        header-title="agent ssiap" 
        title="Une expertise dédiée à la sécurité incendie"
        first-content="L’agent SSIAP intervient pour prévenir les risques d’incendie et garantir la sécurité des occupants d’un site. Formé aux normes et aux procédures strictes, il veille au bon fonctionnement des équipements et à l’application des consignes de sécurité."
        second-content="Sa présence permet d’anticiper les situations à risque et d’assurer une gestion rapide et efficace en cas d’incident."
        src="./images/SSIAP_about.webp" alt="image"
        info-1="Prévention des risques incendie"
        info-2="Surveillance des équipements de sécurité" 
        info-3="Application des procédures réglementaires">
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
        title="Agent de Sécurité & de Prévention"
        content="En savoir plus sur l'agent de sécurité..."
        src="/images/Security_card.webp"
        alt="Agent de Sécurité"
        href="/agent_securite">
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
        title="Homme clés - Gestionnaire de clés"
        content="En savoir plus sur l'Homme clés ..."
        src="/images/Keys_card.webp"
        alt="homme clés"
        href="/agent_homme_cles">
        </agent-card>
      </div>
    </div>
    <media-block 
      header-title="Missions" 
      title="Les missions de l’agent SSIAP"
      first-content="L’agent SSIAP assure la surveillance des installations de sécurité incendie et veille au respect des normes en vigueur. Il effectue des contrôles réguliers et s’assure du bon fonctionnement des équipements."
      second-content="En cas d’alerte, il intervient rapidement, coordonne les actions et met en œuvre les procédures nécessaires pour sécuriser les lieux et les personnes."
      src="./images/SSIAP_missions.webp" alt="image"
      info-1="Contrôle des systèmes de sécurité incendie"
      info-2="Vérification des équipements et installations" 
      info-3="Gestion des alertes et incidents">
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
