import { Carousel } from "../components/carousel";
import { Form } from "../components/static/form.js";

export function Contact() {
  const template = document.createElement("template");
  template.innerHTML = `
  <div id="placholder"></div>
  `


  Form()
  return template.content;
}
