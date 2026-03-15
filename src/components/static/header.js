
export function toggleSubnav(subnav) {
  const subnavWrapper = subnav.querySelector(".subnav-wrapper");
  subnavWrapper.classList.toggle("hidden");
}

export function Header() {
  const template = document
    .querySelector("#header-template")
    .content
    .cloneNode(true);

  const subnav = template.querySelector(".subnav");
  subnav.addEventListener("click", () => toggleSubnav(subnav));

  const btnBurger = template.querySelector(".burger-btn");
  const mobileNav = template.querySelector(".mobile-nav");

  btnBurger.addEventListener("click", () => {
    mobileNav.classList.toggle("translate-x-full");
    const body = document.querySelector("body");
    body.classList.toggle("overflow-y-hidden");
  })
  return template;
}
