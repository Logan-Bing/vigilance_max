import "../components/mediaBlock.js"
import "../components/agents.js"
import { Carousel } from "../components/carousel.js";
import { Benefits } from "../components/static/benefits.js";
import { Form } from "../components/static/form.js";


export function Home() {
  const template = document.createElement("template");
  template.innerHTML = `    
    <section id=home class="overflow-x-hidden flex flex-col gap-8 xl:gap-32">
      <div class="flex flex-col">
        <div class="flex items-center justify-center bg-[url(/images/home.webp)] h-screen">
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="relative z-10 px-8 flex flex-col gap-8 items-center justify-center xl:max-w-7xl">
            <div class="flex items-center justify-center bg-base-black rounded-full">
              <ul class="flex gap-8 m-0 text-base-white p-4">
                <li>Sécurité 24/24h</li>
                <li>Présence dissuasive</li>
                <li>Réactivité garantie</li>
              </ul>
            </div>
            <h1 class="text-center text-base-white lg:max-w-5xl">Spécialistes de la sécurisation humaine en Île-de-France, <span class="text-500-primary">depuis plus de 25 ans.</span></h1>
            <p class="text-center text-base-white max-w-[700px]">VIGILANCE MAX met à votre disposition des équipes qualifiées et expérimentées pour assurer la
protection de votre entreprise, de vos chantiers BTP ainsi que de vos sites industriels.
Nous sommes très réactifs et disponibles 24h/24, 7j/7.</p>
            <a class="btn-primary" href="/Contact">Demander un devis</a>
          </div>
        </div> 
        <div id="partners-placeholder" class="bg-white py-8">
        </div>
      </div>
      <media-block 
          header-title="A propos" 
          title="L’expérience, gage de qualité."
          first-content="VIGILANCE MAX s’impose comme un acteur reconnu de la sécurité humaine en Île-de-France,
mettant à votre service plus de 25 ans d’expérience. Nous intervenons pour assurer la sécurisation de vos chantiers, sites industriels, établissements
recevant du public, immeubles de grande hauteur, événements.
        Nos agents sont rigoureusement sélectionnés"
          second-content="Nos agents sont rigoureusement sélectionnés, formés, encadrés et suivis afin de garantir des
prestations de qualité, adaptées à vos risques et à vos exigences opérationnelles.Notre objectif est simple : vous offrir une sécurisation efficace et une véritable tranquillité d’esprit au
quotidien, grâce à des équipes engagées, réactives et pleinement opérationnelles."
          src="/images/0_about.webp" alt="image"
          info-1="Une présence continue pour une sécurité sans interruption."
          info-2="Personnel formé, certifié et expérimenté." 
          info-3="Réactivité immédiate en cas d’incident"></media-block>
      <section class="flex flex-col gap-16 container">
        <h2 class="text-center">Nos agents qualifiés<span class="text-500-primary"> et expérimentés</span></h2>
        <div class="carousel-agents">

          <div class="flex items-center justify-center">
            <agents-block
                title="Agent de sécurité"
                content="Nos agents de prévention et de sécurité assurent une présence professionnelle sur site, leur
  permettant d’anticiper les situations, de réguler les accès et d’intervenir efficacement, tout en
  maintenant un environnement sûr et serein."
                info-1="Vigilance constante"
                info-2="Présence dissuasive"
                src="/images/Security_card.webp"
                href="/agent_securite"
            ></agents-block>
          </div>

          <div class="flex items-center justify-center">
            <agents-block
                title="Agent Cynophile"
                content="Nos équipes maître-chien constituent un appui opérationnel précieux pour la protection de vos sites.
  La mobilité et la vigilance du chien facilitent l’identification de toute présence suspecte."
                info-1="Dissuasion renforcée"
                info-2="Détection rapide"
                src="/images/0_cynophile.webp"
                href="/agent_cynophile"
            ></agents-block>
          </div>

          <div class="flex items-center justify-center">
            <agents-block
                title="Agent ssiap 1 - 2 - 3"
                content="Nos agents SSIAP disposent des compétences nécessaires pour anticiper les risques incendie, porter  assistance aux personnes et gérer les situations critiques."
                info-1="Surveillance active"
                info-2="Contrôle régulier"
                src="/images/0_saap.webp"
            ></agents-block>
          </div>

          <div class="flex items-center justify-center">
            <agents-block
                title="Agent Rondier"
                content="Nos agents mobiles effectuent des contrôles réguliers de vos sites, assurent les mises en sécurité et
  signalent toute anomalie afin de prévenir les risques et garantir la protection de vos installations."
                info-1="Prévention incendie"
                info-2="Intervention maîtrisée"
                src="/images/Rondier_card.webp"
            ></agents-block>
          </div>

          <div class="flex items-center justify-center">
            <agents-block
                title="Homme clés"
                content="Présent lors des phases sensibles de fin de travaux, l’agent gestionnaire de clés sécurise les accès,
  coordonne les ouvertures et facilite l’intervention des entreprises dans des conditions maîtrisées."
                info-1="Accès sécurisé"
                info-2="Autonomie totale"
                src="/images/Keys_card.webp"
            ></agents-block>
          </div> 

          <div class="flex items-center justify-center">
            <agents-block
                title="Agent Trafic"
                content="Nos agents trafic organisent les livraisons, régulent les mouvements de véhicules et assurent la
  fluidité des opérations sur chantier dans le respect des règles de sécurité."
                info-1="Flux maîtrisés"
                info-2="Circulation sécurisée"
                src="/images/Trafic_card.webp"
            ></agents-block>
          </div>

        </div>
      </section>
      <div class="flex flex-col gap-8 justify-center items-center container">
        <div class="flex flex-col gap-4 text-center">
          <h2>VIGILANCE MAX SP déploie principalement ses équipes <span class="text-500-primary">en Île-de-France</span></h2>
          <p>Selon les besoins spécifiques de nos clients et la nature des missions confiées, nous sommes
  également en mesure d’intervenir sur l’ensemble du territoire national.</p>
        </div>

        <div class="carousel-sites">

          <div class="flex items-center justify-center">
            <div class="bg-base-white shadow-custom flex flex-col justify-between max-w-96 min-h-130 p-4">

              <div class="flex flex-col gap-4">
                <h2>Sièges sociaux &amp; Bureaux</h2>
                <p>Surveillance adaptée (ponctuelle ou continue), maîtrise des flux d’entrée et accueil sous contrôle sécurisé.</p>
              </div>

              <div>
                <img class="min-h-80 max-h-80 min-w-full" src="/images/office.webp">
              </div>

            </div>
          </div>


          <div class="flex items-center justify-center">
            <div class="bg-base-white shadow-custom flex flex-col justify-between max-w-96 min-h-130 p-4">

              <div class="flex flex-col gap-4">
                <h2>Magasins, Commerces &amp; Centres Commerciaux</h2>
                <p>Prévention des actes malveillants, maîtrise des accès et gestion des comportements inappropriés.</p>
              </div>

              <div>
                <img class="min-h-80 max-h-80 min-w-full" src="/images/shop.webp">
              </div>

            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="bg-base-white shadow-custom flex flex-col justify-between max-w-96 min-h-130 p-4">

              <div class="flex flex-col gap-4">
                <h2>Chantiers en activité, vacants, isolés</h2>
                <p>Sécurisation des accès sensibles, surveillance des infrastructures et contrôles périodiques sur site.</p>
              </div>

              <div>
                <img class="min-h-80 max-h-80 min-w-full" src="/images/chantier.webp">
              </div>

            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="bg-base-white shadow-custom flex flex-col justify-between max-w-96 min-h-130 p-4">

              <div class="flex flex-col gap-4">
                <h2>Sites Industriels &amp; Logistiques</h2>
                <p>Protection du périmètre, filtrage des accès et coordination des mouvements de poids lourds sur site.</p>
              </div>

              <div>
                <img class="min-h-80 max-h-80 min-w-full" src="/images/sites.webp">
              </div>

            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="bg-base-white shadow-custom flex flex-col justify-between max-w-96 min-h-130 p-4">
              <div class="flex flex-col gap-4">
                <h2>Hotels</h2>
                <p>Accueil soigné et présence discrète pour garantir confort et sérénité.</p>
              </div>

              <div>
                <img class="min-h-80 max-h-80 min-w-full" src="/images/hotel.webp">
              </div>

            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="bg-base-white shadow-custom flex flex-col justify-between max-w-96 min-h-130 p-4">

              <div class="flex flex-col gap-4">
                <h2>Événements</h2>
                <p>Sécurisation du public, contrôle des entrées et travail coordonné avec les responsables de
  l’événement.</p>
              </div>

              <div>
                <img class="min-h-80 max-h-80 min-w-full" src="/images/event.webp">
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `

  const section = template.content.querySelector("section");
  const mediaBlock = section.querySelector("media-block");
  const agentCarousel = section.querySelector(".carousel-agents");
  const sitesCarousel = section.querySelector(".carousel-sites");
  new Carousel(sitesCarousel, { slideView: 3, slideToScroll: 3 });
  new Carousel(agentCarousel, { slideView: 2, slideToScroll: 2 });


  const partnerPlaceholder = section.querySelector("#partners-placeholder");
  const partnerTemplate = document.querySelector("#partners").content.cloneNode(true);
  const partnerCarousel = partnerTemplate.querySelector(".partners-wrapper");
  new Carousel(partnerCarousel, { slideView: 5, slideToScroll: 1, autoplay: true, loop: true });
  partnerPlaceholder.appendChild(partnerCarousel);

  mediaBlock.after(Benefits());
  section.appendChild(Form())
  return template.content;
}

