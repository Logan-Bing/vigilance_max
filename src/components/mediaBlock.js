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
    const info_1 = this.attr("info-1");
    const info_2 = this.attr("info-2");
    const info_3 = this.attr("info-3");
    let reverse = this.attr("reverse");

    if (!reverse)
      reverse = "flex-row";

    const listItems = [info_1, info_2, info_3]
      .map((i) => this.buildListItem(i))
      .join('');

    this.innerHTML = `
      <div class="container flex flex-col xl:${reverse} items-center gap-8">

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

          <ul class="list flex flex-col gap-2">
            ${listItems}
          </ul>

          <button class="btn-primary self-start">Demander un devis</button>

        </div>

        <!-- right block -->
        <div class="img-wrapper">
          <div class="triangle"></div>
          <div class="img-card">
            <img src="${imageUrl}" alt="${imageAlt}">
          </div>
        </div>
      </div>
      `;
  }
}

customElements.define("media-block", mediaBlock);
