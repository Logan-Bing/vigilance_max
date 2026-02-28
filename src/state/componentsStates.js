
export function toggleSubnav(subnav) {
  subnav.addEventListener("click", () => {
    const subnavWrapper = subnav.querySelector(".subnav-wrapper");
    subnavWrapper.classList.toggle("hidden");
  })
}

