
export class mediaBlock extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
  }

  get label() {
    return this.getAttribute("label");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const headerTitle = this.getAttribute("header-title") ?? "";
    const title = this.getAttribute("title") ?? "";
    const firstContent = this.getAttribute("first-content") ?? "";
    const secondContent = this.getAttribute("second-content") ?? "";
    this.innerHTML = `
      <div class="wrapper flex items-center gap-8">
        <div class="content-wrapper flex flex-col gap-8">
          <div class="header flex flex-col gap-4"></div>
          <div class="content flex flex-col gap-4">
              <p></p>
              <p></p>
          </div>
          <div class="list flex flex-col gap-2"></div>
          <button></button>
        </div>
        <div class="img-wrapper relative">
          <img src="">
          <div class="triangle"></div>
        </div>
      </div>
      `;
  }
}

customElements.define("media-block", mediaBlock);
