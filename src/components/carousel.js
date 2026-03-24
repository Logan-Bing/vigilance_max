export class Carousel {
  constructor(element, options) {
    this.element = element;
    this.options = Object.assign({}, {
      slideView: 1,
      slideToScroll: 1,
      loop: false,
      autoplay: false,
      autoplayInterval: 4000,
    }, options);

    let children = Array.from(element.children);
    this.root = this.createDivWithClass("carousel");
    this.container = this.createDivWithClass("carousel__container");
    this.isMobile = false;
    this.currentItem = 0;
    this.autoplayTimer = null;

    this.root.appendChild(this.container);
    this.element.appendChild(this.root);
    this.moveCallbacks = [];

    this.items = children.map((child) => {
      const item = this.createDivWithClass("carousel__item");
      item.appendChild(child);
      return item;
    });

    // Si loop actif, on insère des clones avant/après
    if (this.options.loop) {
      this.cloneItems();
    } else {
      this.items.forEach((item) => this.container.appendChild(item));
    }

    this.setStyle();
    this.createNavigation();

    // En mode loop, on démarre sur le premier "vrai" item (après les clones de gauche)
    if (this.options.loop) {
      this.currentItem = this.slideView;
      this.goToItem(this.currentItem, false); // sans transition pour le positionnement initial
    }

    this.moveCallbacks.forEach((cb) => cb(this.currentItem));
    this.onWindowResize();
    window.addEventListener("resize", this.onWindowResize.bind(this));

    if (this.options.autoplay) {
      this.startAutoplay();
      // Pause au survol
      this.root.addEventListener("mouseenter", this.stopAutoplay.bind(this));
      this.root.addEventListener("mouseleave", this.startAutoplay.bind(this));
    }
  }

  /**
   * Clone les items de début/fin pour donner l'illusion d'un carousel infini.
   * On clone `slideView` items de chaque côté.
   */
  cloneItems() {
    const count = this.slideView;
    const total = this.items.length;

    // Clones de droite (copies des premiers items, placés à la fin)
    const clonesRight = this.items.slice(0, count).map((item) =>
      item.cloneNode(true)
    );
    // Clones de gauche (copies des derniers items, placés au début)
    const clonesLeft = this.items.slice(total - count).map((item) =>
      item.cloneNode(true)
    );

    [...clonesLeft, ...this.items, ...clonesRight].forEach((item) =>
      this.container.appendChild(item)
    );
  }

  setStyle() {
    const slideCount = this.options.loop
      ? this.items.length + this.slideView * 2
      : this.items.length;

    let ratio = slideCount / this.slideView;
    this.container.style.width = ratio * 100 + "%";
    this.container
      .querySelectorAll(".carousel__item")
      .forEach(
        (item) => (item.style.width = 100 / this.slideView / ratio + "%")
      );
  }

  createNavigation() {
    if (this.options.autoplay === false) {
      const nextButton = this.createDivWithClass("carousel__next");
      const prevButton = this.createDivWithClass("carousel__prev");
      this.root.appendChild(nextButton);
      this.root.appendChild(prevButton);
      nextButton.addEventListener("click", this.next.bind(this));
      prevButton.addEventListener("click", this.prev.bind(this));

      if (!this.options.loop) {
        this.onMove((index) => {
          prevButton.classList.toggle("carousel__prev--hidden", index === 0);
          nextButton.classList.toggle(
            "carousel__next--hidden",
            this.items[this.currentItem + this.slideView] === undefined
          );
        });
      }
    }
  }

  prev() {
    this.goToItem(this.currentItem - this.slideToScroll);
  }

  next() {
    this.goToItem(this.currentItem + this.slideToScroll);
  }

  /**
   * @param {number} index
   * @param {boolean} [withTransition=true]
   */
  goToItem(index, withTransition = true) {
    const allItems = this.container.querySelectorAll(".carousel__item");
    const totalSlides = allItems.length;

    if (!withTransition) {
      this.container.style.transition = "none";
    } else {
      this.container.style.transition = "";
    }

    let translateX = (index * -100) / totalSlides;
    this.container.style.transform = `translate3d(${translateX}%, 0, 0)`;
    this.currentItem = index;
    this.moveCallbacks.forEach((cb) => cb(index));

    // Après la transition, on vérifie si on doit "téléporter" vers le vrai item
    if (this.options.loop) {
      this.container.addEventListener("transitionend", this.handleLoopJump.bind(this), { once: true });
    }
  }

  /**
   * Après la fin d'une transition, si on est sur un clone,
   * on se repositionne silencieusement sur le vrai item correspondant.
   */
  handleLoopJump() {
    const count = this.slideView;
    const total = this.items.length;

    // On est sur les clones de gauche → téléporter à la fin des vrais items
    if (this.currentItem < count) {
      this.goToItem(this.currentItem + total, false);
    }
    // On est sur les clones de droite → téléporter au début des vrais items
    else if (this.currentItem >= count + total) {
      this.goToItem(this.currentItem - total, false);
    }
  }

  onMove(cb) {
    this.moveCallbacks.push(cb);
  }

  startAutoplay() {
    if (this.autoplayTimer) return;
    this.autoplayTimer = setInterval(() => {
      this.next();
    }, this.options.autoplayInterval);
  }

  stopAutoplay() {
    clearInterval(this.autoplayTimer);
    this.autoplayTimer = null;
  }

  onWindowResize() {
    if (this.options.autoplay === false) {
      let mobile = window.innerWidth < 1280;
      if (mobile !== this.isMobile) {
        this.isMobile = mobile;
        this.setStyle();
        this.moveCallbacks.forEach((cb) => cb(this.currentItem));
      }
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
