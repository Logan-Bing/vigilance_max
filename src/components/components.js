
export class Components extends HTMLElement {

  constructor() {
    super();
  }

  get label() {
    return this.getAttribute("label");
  }

  connectedCallback() {
    console.log("callback appeler pour", this);
    this.render();
  }

  buildListItem(text) {
    return `
      <li class="flex gap-4">
        <img src="../../public/icons/icon/Vector.svg">
        <span>${text}</span>
      </li>
    `
  }

  attr(name, fallback = '') {
    return this.getAttribute(name) ?? fallback;
  }
}
