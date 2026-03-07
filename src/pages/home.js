import "../components/mediaBlock.js"

export function Home() {
  return `    
    <section id=home class="flex flex-col gap-8 xl:gap-32">
      <div class="flex items-center justify-center bg-[url(../../public/images/home.webp)] h-screen">
        <div class="px-8 flex flex-col gap-8 items-center justify-center xl:max-w-7xl">
          <div class="flex items-center justify-center bg-base-black rounded-full">
            <ul class="flex gap-8 m-0 text-base-white p-4">
              <li>Sécurité 24/24h</li>
              <li>Présence dissuasive</li>
              <li>Réactivité garantie</li>
            </ul>
          </div>
          <h1 class="text-center text-base-white">Votre partenaire en gardiennage & sécurité humaine <span class="text-500-primary">commerces et sites industriels</span></h1>
          <button class="btn-primary">Demander un devis </button>
        </div>
      </div> 
      <media-block 
          header-title="A propos" 
          title="À propos de Vigilence Max"
          first-content="Chez Vigilence Max, nous assurons la protection des biens, des infrastructures et des personnes avec rigueur, professionnalisme et réactivité."
          second-content="Nous intervenons auprès des entreprises, des chantiers, des commerces et des sites industriels en mettant en place des dispositifs de sécurité adaptés à chaque environnement"
          src="./public/images/about.webp" alt="image"
          info-1="Une présence continue pour une sécurité sans interruption."
          info-2="Personnel formé, certifié et expérimenté." 
          info-3="Réactivité immédiate en cas d’incident"></media-block>
    </section>
  `
}

