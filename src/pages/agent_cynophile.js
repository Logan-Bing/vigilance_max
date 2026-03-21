import { AgentBanner } from "../components/agentBanner";
import { Benefits } from "../components/static/benefits";
import { AgentCard } from "../components/agentCard";
import { Carousel } from "../components/carousel";

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
        header-title="Agent cynophile" 
        title="sécurité renforcée par le binôme homme-chien"
        first-content="Chez Vigilence Max, nous assurons la protection des biens, des infrastructures et des personnes avec rigueur, professionnalisme et réactivité."
        second-content="Le chien, dressé pour détecter les comportements suspects et intervenir rapidement, agit comme un véritable atout dissuasif. Associé à l’expertise de l’agent, ce duo garantit une vigilance accrue, de jour comme de nuit, même dans des environnements complexes."
        src="./public/images/Cynophile_about.webp" alt="image"
        info-1="Intervention efficace et maîtrisée en cas d’incident"
        info-2="Détection rapide des intrusions et comportements suspects" 
        info-3="Présence dissuasive forte grâce au binôme homme-chien">
    </media-block>
    <div class="container carousel-cards">
      <div class="flex items-center justify-center">
        <agent-card
        title="Agent de Sécurité & de Prévention"
        content="En savoir plus sur l'agent de sécurité..."
        src="/images/Security_card.png"
        alt="Agent de Sécurité"
        href="/agent_securite">
        </agent-card>
      </div>
      <div class="flex items-center justify-center">
        <agent-card
        title="Agent Rondier"
        content="En savoir plus sur l'agent rondier..."
        src="/images/Cynophile_card.png"
        alt="Agent Rondier"
        href="/agent_rondier">
        </agent-card>
      </div>
      <div class="flex items-center justify-center">
        <agent-card
        title="Agent SSIAP"
        content="En savoir plus sur l'agent SSIAP..."
        src="/images/Cynophile_card.png"
        alt="Agent SSIAP"
        href="/agent_rondier">
        </agent-card>
      </div>
      <div class="flex items-center justify-center">
        <agent-card
        title="Agent Homme Trafic"
        content="En savoir plus sur l'agent trafic..."
        src="/images/Cynophile_card.png"
        alt="Agent Homme Trafic"
        href="/agent_homme_trafic">
        </agent-card>
      </div>
      <div class="flex items-center justify-center">
        <agent-card
        title="Homme clés - Gestionnaire de clés"
        content="En savoir plus sur l'Homme clés ..."
        src="/images/Cynophile_card.png"
        alt="homme clés"
        href="/agent_homme_cles">
        </agent-card>
      </div>
    </div>
    <media-block 
      header-title="Missions" 
      title="Les missions de l’agent cynophile"
      first-content="L’agent cynophile intervient sur des missions de surveillance, de prévention et de sécurisation des sites sensibles. Grâce à la complémentarité entre l’homme et le chien, il est capable de détecter rapidement toute anomalie et d’agir avec efficacité."
      second-content="Présent sur le terrain, il effectue des rondes régulières, contrôle les accès et veille à maintenir un environnement sécurisé. Son chien, entraîné à l’obéissance et à la détection, renforce considérablement la capacité d’intervention et la dissuasion face aux risques."
      src="./public/images/Cynophile_missions.webp" alt="image"
      info-1="Surveillance et rondes de sécurité sur site"
      info-2="Contrôle des accès et prévention des intrusions" 
      info-3="Surveillance et rondes de sécurité sur site">
    </media-block>
  </section>
  `

  const section = template.content.querySelector("section");
  const mediaBlock = section.querySelector("media-block");
  mediaBlock.after(Benefits());
  const carousel = section.querySelector(".carousel-cards");
  new Carousel(carousel, { slideView: 3, slideToScroll: 2 })

  return template.content;
}
