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
      <div class="p-4 shadow-custom bg-white xl:max-w-145">

        <div class="flex gap-8">
          <!--Content Block-->
          <div class="flex flex-col gap-8 max-w-60">

            <div class="flex flex-col gap-2">
              <h3 class="text-500-primary">${title}</h3>
              <p>${content}</p>
            </div>
            
            <ul class="flex flex-col gap-2">${listItems}</ul>

            <button class="btn-primary self-start"><a href="${redirectUrl}" >En savoir plus</a></button>

          </div>
          <!--Image Block-->
          <img class="hidden lg:block" src="${imgUrl}" alt="${imgAlt}">
        </div>

      </div>
    `
  }
}

customElements.define("agents-block", AgentBlock)
