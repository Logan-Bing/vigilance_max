import { Components } from "./components.js";

export class AgentBlock extends Components {

  constructor() {
    super();
  }

  render() {
    const title = this.attr("title");
    const content = this.attr("content");
    const imgUrl = this.attr("src");
    const imgAlt = this.attr("alt");
    const info_1 = this.attr("info-1");
    const info_2 = this.attr("info-2");
    const redirectUrl = this.attr("href");

    const listItems = [info_1, info_2]
      .map((info) => this.buildListItem(info))
      .join('');

    this.innerHTML = `
      <div class="mx-3.5 p-4 shadow-custom bg-white max-w-145">

        <div class="flex justify-between">
          <!--Content Block-->
          <div class="flex flex-col gap-8 max-w-60">

            <div class="flex flex-col gap-2">
              <h3 class="text-500-primary">${title}</h3>
              <p>${content}</p>
            </div>
            
            <ul class="flex flex-col gap-2">${listItems}</ul>

            <a class="btn-primary self-start" href="${redirectUrl}" >En savoir plus</a>

          </div>
          <!--Image Block-->
          <img src="${imgUrl}" alt="${imgAlt}" loading="lazy">
        </div>

      </div>
    `
  }
}

customElements.define("agents-block", AgentBlock)
