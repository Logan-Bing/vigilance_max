
export class mediaBlock extends HTMLElement {

  constructor() {
    super();
  }

  get label() {
    return this.getAttribute("label");
  }

  connectedCallback() {
    this.render();
  }

  #attr(name, fallback = '') {
    return this.getAttribute(name) ?? fallback;
  }

  #buildListItem(text) {
    return `
      <li flex gap-4>
        <img src="../../public/icons/icon/Vector.svg" class="bg-500-primary">
        <span>${text}</span>
      </li>
    `
  }

  render() {
    const headerTitle = this.#attr("header-title");
    const title = this.#attr("title");
    const firstContent = this.#attr("first-content");
    const secondContent = this.#attr("second-content");
    const imageUrl = this.#attr("src");
    const imageAlt = this.#attr("alt");
    const info_1 = this.#attr("info-1");
    const info_2 = this.#attr("info-2");
    const info_3 = this.#attr("info-1");

    const listItems = [info_1, info_2, info_3]
      .map((i) => this.#buildListItem(i))
      .join('');

    this.innerHTML = `
      <div class="wrapper flex items-center gap-8 container">

        <!-- left block -->
        <div class="content-wrapper flex flex-col gap-8">

          <div class="header flex flex-col gap-4">
            <h3>${headerTitle}</h3>
            <h2>${title}</h2>
          </div>

          <div class="content flex flex-col gap-4">
              <p>${firstContent}</p>
              <p>${secondContent}</p>
          </div>

          <ul class="list flex flex-col gap-2">
            ${listItems}
          </ul>

          <button class="btn-primary">Demander un devis</button>

        </div>

        <!-- right block -->
        <div class="img-wrapper relative">
          <img src=${imageUrl} alt=${imageAlt}>
          <div class="triangle"></div>
        </div>
      </div>
      `;
  }
}

customElements.define("media-block", mediaBlock);
