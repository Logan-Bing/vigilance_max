import { AgentBanner } from "../components/agentBanner";
import { Benefits } from "../components/static/benefits";
import { AgentCard } from "../components/agentCard";
import { Carousel } from "../components/carousel";

export function AgentTrafic() {
  const template = document.createElement("template");
  template.innerHTML = `
  <section id=cynophile-page class="overflow-x-hidden flex flex-col gap-8 xl:gap-32">
    <agent-banner
    badge="Sécurité 24h/24"
    title="Agent Trafic"
    description="Spécialiste de la gestion des flux, l’agent de trafic organise et sécurise la circulation des véhicules et des personnes sur site."
    image="/images/Trafic_banner.webp"
    cta-label="Contactez-nous"
    cta-href="/contact"
    layout="right"
    ></agent-banner>
    <media-block 
        header-title="agent trafic" 
        title="Une gestion fluide et sécurisée des flux"
        first-content="L’agent de trafic veille à la bonne organisation des flux de circulation sur les sites. Il oriente les véhicules et les personnes, tout en assurant le respect des consignes de sécurité."
        second-content="Grâce à sa présence et à sa réactivité, il contribue à maintenir un environnement structuré, fluide et sécurisé, adapté aux contraintes du site."
        src="./images/Trafic_about.webp" alt="image"
        info-1="Gestion des flux de circulation"
        info-2="Orientation des véhicules et des personnes" 
        info-3="Prévention des risques liés aux déplacements">
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
        title="Agent de Sécurité & de Prévention"
        content="En savoir plus sur l'agent de sécurité..."
        src="/images/Security_card.webp"
        alt="Agent de Sécurité"
        href="/agent_securite">
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
      title="Les missions de l’agent trafic"
      first-content="L’agent de trafic organise la circulation afin de garantir la fluidité et la sécurité des déplacements. Il contrôle les accès, régule les flux et veille au respect des consignes."
      second-content="En cas de situation particulière, il adapte ses actions pour assurer un trafic sécurisé et éviter tout incident."
      src="./images/Trafic_missions.webp" alt="image"
      info-1="Régulation de la circulation"
      info-2="Contrôle des accès véhicules" 
      info-3="Orientation et assistance des usagers">
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
