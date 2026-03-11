
export class Components extends HTMLElement {

  constructor() {
    super();
  }

  get label() {
    return this.getAttribute("label");
  }

  connectedCallback() {
    this.render();
  }

  buildListItem(text) {
    return `
      <li class="flex gap-4">
        <img class="w-6" src="/icons/icon/Check.svg">
        <span>${text}</span>
      </li>
    `
  }

  attr(name, fallback = '') {
    return this.getAttribute(name) ?? fallback;
  }
}
