import { Components } from "./components.js";

/**
 * @element agent-banner
 *
 * @attr {string} badge      - Petit texte au-dessus du titre (ex: "Sécurité 24h/24")
 * @attr {string} title      - Titre principal (ex: "Agent Cynophile")
 * @attr {string} description - Paragraphe de description
 * @attr {string} image      - URL de l'image de fond
 * @attr {string} cta-label  - Texte du bouton CTA (ex: "Contactez-nous")
 * @attr {string} cta-href   - Lien du bouton CTA
 * @attr {"left"|"right"} layout - Disposition du texte : "left" (défaut) ou "right"
 *
 * @example
 * <agent-banner
 *   badge="Sécurité 24h/24"
 *   title="Agent Cynophile"
 *   description="Associer l'expertise humaine à la capacité de détection..."
 *   image="/images/cynophile.jpg"
 *   cta-label="Contactez-nous"
 *   cta-href="/Contact"
 *   layout="left"
 * ></agent-banner>
 */
export class AgentBanner extends Components {
  static get observedAttributes() {
    return ["badge", "title", "description", "image", "cta-label", "cta-href", "layout"];
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  get layout() {
    return this.attr("layout", "left");
  }

  get isRight() {
    return this.layout === "right";
  }

  /**
   * Triangle SVG décoratif doré — change de coin selon la disposition.
   * layout="left"  → coin bas-droit
   * layout="right" → coin bas-gauche (miroir horizontal)
   */
  buildTriangle() {
    const isRight = this.isRight;

    // Positionnement absolu du conteneur
    const positionClasses = isRight
      ? "left-0 bottom-0"
      : "right-0 bottom-0";

    // Le SVG est un triangle rectangle qui pointe vers l'intérieur de la bannière
    // layout left  : triangle en bas-droite → pointe vers le bas-gauche
    // layout right : triangle en bas-gauche → miroir, pointe vers le bas-droite
    const points = isRight
      ? "0,218 311,218 0,0"   // pointe en haut-gauche
      : "0,218 311,218 311,0"; // pointe en haut-droite

    return `
      <div class="absolute ${positionClasses} w-[311px] h-[218px] pointer-events-none">
        <svg
          viewBox="0 0 311 218"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-full"
          aria-hidden="true"
        >
          <polygon points="${points}" fill="#c7882b" />
        </svg>
      </div>
    `;
  }

  render() {
    const badge = this.attr("badge");
    const title = this.attr("title");
    const description = this.attr("description");
    const image = this.attr("image");
    const ctaLabel = this.attr("cta-label", "Contactez-nous");
    const ctaHref = this.attr("cta-href", "#");
    const isRight = this.isRight;

    // Alignement du bloc texte
    const textAlignClasses = isRight
      ? "items-end text-right ml-auto"   // pousse à droite
      : "items-start text-left mr-auto"; // pousse à gauche

    this.innerHTML = `
      <section class="relative w-full h-[714px] overflow-hidden bg-black flex justify-center items-center">

        <!-- Image de fond -->
        <img
          src="${image}"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <!-- Overlay sombre léger pour lisibilité du texte -->
        <div class="absolute inset-0 bg-black/30 pointer-events-none"></div>

        <!-- Triangle décoratif -->
        ${this.buildTriangle()}

        <!-- Bloc texte -->
        <div class="z-10 container">
          <div class="flex flex-col gap-8 ${textAlignClasses} max-w-[457px] ">

            <!-- Badge -->
            ${badge ? `
              <div class="inline-flex self-${isRight ? "end" : "start"}">
                <span class="
                  bg-white text-[#18182b] text-xs font-semibold
                  font-['Urbanist',sans-serif] tracking-[-0.12px]
                  px-4 py-2 rounded-full whitespace-nowrap
                ">
                  ${badge}
                </span>
              </div>
            ` : ""}

            <!-- Titre -->
            <h1 class="text-white">
              ${title}
            </h1>

            <!-- Description -->
            <p class="text-gray-300">
              ${description}
            </p>

            <!-- CTA -->
            <a
              href="${ctaHref}"
              class="btn-primary"
            >
              ${ctaLabel}
            </a>

          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("agent-banner", AgentBanner);
