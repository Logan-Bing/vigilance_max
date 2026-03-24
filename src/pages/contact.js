import { Carousel } from "../components/carousel";
import { Form } from "../components/static/form.js";

export function Contact() {
  const template = document.createElement("template");
  template.innerHTML = `
    <div class="flex items-center justify-center bg-[url(/images/contact_bg.png)] h-screen">
      <div id="form-placeholder" class="w-full mt-64 xl:mt-32">
      </div>
    <div>
  `

  const formPlaceholder = template.content.querySelector("#form-placeholder");
  formPlaceholder.appendChild(Form());
  return template.content;
}
