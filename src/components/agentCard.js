import { Components } from "./components";

export class AgentCard extends Components {

  constructor() {
    super();
  }

  render() {
    const title = this.attr("title");
    const content = this.attr("content");
    const imageUrl = this.attr("src");
    const imageAlt = this.attr("alt");
    const redirectLink = this.attr("href");

    this.innerHTML = `
    <div class="p-4 flex flex-col gap-8 rounded-2xl shadow-custom max-w-96">
      <!-- ImageBlock -->
      <div>
        <img class="rounded-2xl" src=${imageUrl} alt=${imageAlt}>
      </div>

      <!-- ContentBlock-->
      <div class="flex flex-col gap-4">
        <div>
          <h2>${title}</h2>
        </div>
        <div>
          <p>${content}<p>
        </div>
        <a class="btn-primary" href=${redirectLink}>En savoir plus</a>
      </div>
    </div>
    `
  }
}

customElements.define("agent-card", AgentCard)
