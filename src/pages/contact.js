import { Carousel } from "../components/carousel";
import { Form } from "../components/static/form.js";

export function Contact() {
  const template = document.createElement("template");
  template.innerHTML = `
    <div id="form-placeholder" class="flex items-center justify-center bg-[url(/images/contact_bg.png)] h-screen">
    <div>
  `

  const formPlaceholder = template.content.querySelector("#form-placeholder");
  formPlaceholder.appendChild(Form());
  return template.content;
}
