
export function Header(links) {
  const template = document
    .querySelector("#header-template")
    .content
    .cloneNode(true);

  const ul = template.querySelector("ul");

  links.forEach(link => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.href}">${link.label}</a>`
    ul.append(li);
  });
  return template;
}
