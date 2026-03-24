import { Components } from "./components.js";

export class mediaBlock extends Components {

  constructor() {
    super();
  }

  render() {
    const headerTitle = this.attr("header-title");
    const title = this.attr("title");
    const firstContent = this.attr("first-content");
    const secondContent = this.attr("second-content");
    const imageUrl = this.attr("src");
    const imageAlt = this.attr("alt");
    let reverse = this.attr("reverse");

    if (!reverse)
      reverse = "flex-row";

    this.innerHTML = `
      <div class="container flex flex-col xl:flex-row items-center gap-8">

        <!-- left block -->
        <div class="flex flex-col gap-8">

          <div class="header flex flex-col gap-4">
            <h3 class="text-500-primary">${headerTitle}</h3>
            <h2 class="font-semibold">${title}</h2>
          </div>

          <div class="content flex flex-col gap-4">
              <p class="font-medium">${firstContent}</p>
              <p class="font-medium">${secondContent}</p>
          </div>

          <a class="btn-primary self-start" href="/Contact">Demander un devis</a>

        </div>

        <!-- right block -->
        <div class="img-wrapper">
          <div class="triangle"></div>
          <div class="img-card">
            <img class="object-cover" src="${imageUrl}" alt="${imageAlt}" loading="lazy">
          </div>
        </div>
      </div>
      `;
  }
}

customElements.define("media-block", mediaBlock);
