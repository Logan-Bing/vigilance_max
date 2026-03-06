import "../components/mediaBlock.js"

export function Home() {
  return `
    <section id=home class="container">
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

