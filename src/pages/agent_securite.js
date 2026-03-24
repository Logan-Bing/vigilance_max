import { AgentBanner } from "../components/agentBanner";
import { Benefits } from "../components/static/benefits";
import { AgentCard } from "../components/agentCard";
import { Carousel } from "../components/carousel";

export function AgentSecurite() {
  const template = document.createElement("template");
  template.innerHTML = `
  <section id=cynophile-page class="overflow-x-hidden flex flex-col gap-8 xl:gap-32">
    <agent-banner
    badge="Sécurité 24h/24"
    title="Agent de sécurité et de prévention"
    description="Professionnel de la surveillance et de la prévention, l’agent de sécurité assure la protection des personnes, des biens et des sites, tout en anticipant les risques."
    image="/images/Security_banner.webp"
    cta-label="Contactez-nous"
    cta-href="/contact"
    layout="left"
    ></agent-banner>
    <media-block 
        header-title="Agent Securite" 
        title="Un acteur clé de la sécurité quotidienne"
        first-content="L’agent de sécurité et de prévention joue un rôle essentiel dans la protection des sites et des personnes. Grâce à son expérience et à sa vigilance constante, il assure une présence rassurante et dissuasive au quotidien."
        second-content="Formé à la gestion des situations à risque, il intervient avec calme et professionnalisme pour prévenir les incidents et garantir un environnement sécurisé, adapté à chaque type de site."
        src="./images/Security_about.webp" alt="image"
        info-1="Présence dissuasive et rassurante"
        info-2="Surveillance continue des lieux" 
        info-3="Prévention des risques et incidents">
    </media-block>
    <div class="container carousel-cards">
      <div class="flex items-center justify-center">
        <agent-card
        title="Agent cynophile"
        content="En savoir plus sur l'agent cynophile..."
        src="/images/Cynophile_card.webp"
        alt="Agent Cynophile"
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
      title="Les missions de l’agent de sécurité"
      first-content="L’agent de sécurité assure des missions de surveillance, de contrôle et de prévention sur différents types de sites. Il veille au respect des consignes de sécurité et intervient en cas de situation inhabituelle."
      second-content="Au quotidien, il effectue des rondes, contrôle les accès et garantit la sécurité des personnes et des biens. Sa présence permet d’anticiper les risques et de maintenir un environnement serein."
      src="./images/Security_missions.webp" alt="image"
      info-1="Contrôle des accès et filtrage des entrées"
      info-2="Rondes de surveillance régulières"
      info-3="Prévention des incidents et anomalies">
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
