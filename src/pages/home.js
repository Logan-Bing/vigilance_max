import "../components/mediaBlock.js"
import "../components/agents.js"
import { Carousel } from "../components/carousel.js";
import { Benefits } from "../components/static/benefits.js";
import { Form } from "../components/static/form.js";


export function Home() {
  const template = document.createElement("template");
  template.innerHTML = `    
    <section id=home class="overflow-x-hidden flex flex-col gap-8 xl:gap-32">
      <div class="flex items-center justify-center bg-[url(/images/0_home.webp)] h-screen">
        <div class="px-8 flex flex-col gap-8 items-center justify-center xl:max-w-7xl">
          <div class="flex items-center justify-center bg-base-black rounded-full">
            <ul class="flex gap-8 m-0 text-base-white p-4">
              <li>Sécurité 24/24h</li>
              <li>Présence dissuasive</li>
              <li>Réactivité garantie</li>
            </ul>
          </div>
          <h1 class="text-center text-base-white">Votre partenaire en gardiennage & sécurité humaine <span class="text-500-primary">commerces et sites industriels</span></h1>
          <a class="btn-primary" href="/Contact">Demander un devis</a>
        </div>
      </div> 
      <media-block 
          header-title="A propos" 
          title="À propos de Vigilence Max"
          first-content="Chez Vigilence Max, nous assurons la protection des biens, des infrastructures et des personnes avec rigueur, professionnalisme et réactivité."
          second-content="Nous intervenons auprès des entreprises, des chantiers, des commerces et des sites industriels en mettant en place des dispositifs de sécurité adaptés à chaque environnement"
          src="./public/images/0_about.webp" alt="image"
          info-1="Une présence continue pour une sécurité sans interruption."
          info-2="Personnel formé, certifié et expérimenté." 
          info-3="Réactivité immédiate en cas d’incident"></media-block>
      <section class="flex flex-col gap-16 container">
        <h2 class="text-center">Nos différents <span class="text-500-primary">agents</span></h2>
        <div class="carousel-agents">
          <agents-block
              title="Agent cynophile"
              content="Nos agents cynophiles assurent une surveillance renforcée des sites. Grâce au binôme maître-chien, toute présence suspecte est détectée rapidement."
              info-1="détection rapide"
              info-2="détection rapide"
              src="/images/0_cynophile.webp"
              href="/agent_cynophile"
          ></agents-block>
          <agents-block
              title="Agent Rondier"
              content="Nos agents rondiers effectuent des rondes de surveillance régulières, contrôlent les installations et signalent toute anomalie.       pour assurer securité"
              info-1="détection rapide"
              info-2="détection rapide"
              src="/images/0_rondier.webp"
          ></agents-block>
          <agents-block
              title="Agent d'intervenon"
              content="Nos agents rondiers effectuent des rondes de surveillance régulières, contrôlent les installations et signalent toute anomalie.       pour assurer securité"
              info-1="détection rapide"
              info-2="détection rapide"
              src="/images/0_intervention.webp"
          ></agents-block>
          <agents-block
              title="Agent ssiap 1 - 2 - 3"
              content="Nos agents SSIAP disposent des compétences nécessaires pour anticiper les risques incendie, porter  assistance aux personnes et gérer les situations critiques."
              info-1="détection rapide"
              info-2="détection rapide"
              src="/images/0_saap.webp"
          ></agents-block>
        </div>
      </section>
      <media-block 
          id="secteurs"
          header-title="Nos secteurs d’intervention" 
          title="Une solution personnalisée selon votre type de risque"
          first-content="Vigilance Max déploie principalement ses équipes en Île-de-France. Selon les besoins de nos clients et la nature des missions, nous pouvons également intervenir sur l’ensemble du territoire national."
          second-content="Nous intervenons auprès des entreprises, des chantiers, des commerces et des sites industriels en mettant en place des dispositifs de sécurité adaptés à chaque environnement"
          src="/images/0_security.webp" alt="image"
          info-1="Une vision 360° de vos problématiques"
          info-2="Un accompagnement sur-mesure" 
          info-3="Des solutions flexibles, 24h/24 et 7j/7"
          reverse="flex-row-reverse">
      </media-block>
    </section>
  `

  const section = template.content.querySelector("section");
  const mediaBlock = section.querySelector("media-block");
  const secteurs = section.querySelector("#secteurs");
  const carousel = section.querySelector(".carousel-agents");
  new Carousel(carousel, { slideView: 2, slideToScroll: 2 });

  mediaBlock.after(Benefits());
  secteurs.after(Form());
  return template.content;
}

