import { AgentBanner } from "../components/agentBanner";
import { Benefits } from "../components/static/benefits";
import { AgentCard } from "../components/agentCard";
import { Carousel } from "../components/carousel";

export function AgentRondier() {
  const template = document.createElement("template");
  template.innerHTML = `
  <section id=rondier-page class="overflow-x-hidden flex flex-col gap-8 xl:gap-32">
    <agent-banner
    badge="Sécurité 24h/24"
    title="Agent Rondier"
    description="Spécialiste des rondes de surveillance, l’agent rondier assure un contrôle régulier des sites afin de prévenir les risques et détecter toute anomalie."
    image="/images/Rondier_banner.webp"
    cta-label="Contactez-nous"
    cta-href="/contact"
    layout="left"
    ></agent-banner>
    <media-block 
        header-title="agent rondier" 
        title="Une surveillance active et méthodique"
        first-content="L’agent rondier assure une présence dynamique sur le terrain grâce à des rondes régulières et organisées. Il contrôle les installations, vérifie les points sensibles et s’assure du bon fonctionnement des dispositifs de sécurité."
        second-content="Son rôle est essentiel pour anticiper les anomalies et garantir une surveillance continue, adaptée aux environnements industriels, commerciaux ou logistiques."
        src="./images/Rondier_about.webp" alt="image"
        info-1="Rondes régulières et planifiées"
        info-2="Vérification des points sensibles" 
        info-3="Surveillance active des installations">
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
        title="Agent de Sécurité & de Prévention"
        content="En savoir plus sur l'agent de sécurité..."
        src="/images/Security_card.webp"
        alt="Agent de Sécurité"
        href="/agent_securite">
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
      title="Les missions de l’agent rondier"
      first-content="L’agent rondier effectue des rondes de sécurité afin de contrôler l’ensemble du site et de prévenir les incidents. Il vérifie les accès, les installations et s’assure du respect des consignes de sécurité."
      second-content="En cas d’anomalie, il intervient rapidement et applique les procédures adaptées pour garantir la sécurité des lieux et des personnes."
      src="./images/Rondier_missions.webp" alt="image"
      info-1="Rondes de surveillance sur site"
      info-2="Contrôle des accès et des installations" 
      info-3="Détection des anomalies et incidents">
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
