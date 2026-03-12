
const carousel = document.querySelector("#carousel_1");

export class Carousel {

  constructor(element, options) {
    this.element = element;
    this.options = Object.assign({}, {
      slideView: 1,
      slideToScroll: 1
    }, options)
    this.children = Array.from(element.children);
    const root = this.createDivWithClass("carousel");
    const container = this.createDivWithClass("carousel__container");
    root.appendChild(container);
    this.element.appendChild(root);
    this.children.forEach((child) => {
      const item = this.createDivWithClass("carousel__item");
      item.appendChild(child)
      container.appendChild(item);
    })
  }

  createDivWithClass(className) {
    const div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }
}

const carouselInstance = new Carousel(carousel, { slideView: 3 });
