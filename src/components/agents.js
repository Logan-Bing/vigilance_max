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
    const redirectUrl = this.attr("href");

    this.innerHTML = `
      <div class="mx-3.5 p-4 shadow-custom bg-white max-w-145 h-full">

        <div class="flex flex-col gap-4 lg:flex-row h-full">
          <!--Content Block-->
          <div class="flex flex-col justify-between gap-8 xl:max-w-60 flex-1">

            <div class="flex flex-col gap-2">
              <h3 class="text-500-primary">${title}</h3>
              <p>${content}</p>
            </div>
            
            <a class="btn-primary self-start" href="${redirectUrl}" >En savoir plus</a>

          </div>
          <!--Image Block-->
          <div class="min-h-[336px] max-h-[336px] lg:w-[244px] lg:shrink-0 overflow-hidden">
            <img class="w-full h-full object-cover" src="${imgUrl}" alt="${imgAlt}" loading="lazy">
          </div>
        </div>

      </div>
    `
  }
}

customElements.define("agents-block", AgentBlock)
