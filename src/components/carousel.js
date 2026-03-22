
export class Carousel {

  constructor(element, options) {
    this.element = element;
    this.options = Object.assign({}, {
      slideView: 1,
      slideToScroll: 1,
      infinite: false,
    }, options)
    let children = Array.from(element.children);
    this.root = this.createDivWithClass("carousel");
    this.container = this.createDivWithClass("carousel__container");
    this.isMobile = false;
    this.currentItem = 0;
    this.root.appendChild(this.container);
    this.element.appendChild(this.root);
    this.moveCallbacks = [];
    this.items = children.map((child) => {
      const item = this.createDivWithClass("carousel__item");
      item.appendChild(child);
      return item
    })
    // if (this.options.infinite) {
    //   let offset = this.options.slideView * 2 - 1;
    //   this.items = [
    //     ...this.items.slice(this.items.length - offset).map(item => item.cloneNode(true)),
    //     ...this.items,
    //     ...this.items.slice(0, offset).map(item => item.cloneNode(true)),
    //   ]
    // }
    this.items.forEach(item => this.container.appendChild(item));
    this.setStyle();
    this.createNavigation();
    this.moveCallbacks.forEach(cb => cb(this.currentItem));
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  setStyle() {
    let ratio = this.items.length / this.slideView;
    this.container.style.width = (ratio * 100) + "%";
    this.items.forEach(item => item.style.width = ((100 / this.slideView) / ratio) + "%");
  };

  createNavigation() {
    const nextButton = this.createDivWithClass("carousel__next");
    const prevButton = this.createDivWithClass("carousel__prev");
    this.root.appendChild(nextButton);
    this.root.appendChild(prevButton);
    nextButton.addEventListener("click", this.next.bind(this));
    prevButton.addEventListener("click", this.prev.bind(this));
    this.onMove(index => {
      if (index === 0)
        prevButton.classList.add("carousel__prev--hidden");
      else
        prevButton.classList.remove("carousel__prev--hidden");
      if (this.items[this.currentItem + this.slideView] === undefined)
        nextButton.classList.add("carousel__next--hidden");
      else
        nextButton.classList.remove("carousel__next--hidden");
    })
  }

  prev() {
    this.goToItem(this.currentItem - this.slideToScroll);
  }

  next() {
    this.goToItem(this.currentItem + this.slideToScroll);
  }

  goToItem(index) {
    let translateX = index * -100 / this.items.length;
    this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
    this.currentItem = index;
    this.moveCallbacks.forEach(cb => cb(index));
  }

  onMove(cb) {
    this.moveCallbacks.push(cb);
  }

  onWindowResize() {
    let mobile = window.innerWidth < 1280;
    if (mobile !== this.isMobile) {
      this.isMobile = mobile;
      this.setStyle();
      this.moveCallbacks.forEach((cb) => cb(this.currentItem))
    }
  }

  createDivWithClass(className) {
    const div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }

  get slideView() {
    return this.isMobile ? 1 : this.options.slideView;
  }

  get slideToScroll() {
    return this.isMobile ? 1 : this.options.slideToScroll;
  }
}

