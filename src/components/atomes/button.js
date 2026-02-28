
export function Button(text) {
  const button = document.createElement("button");
  button.classList.add("bg-500-primary", "btn-primary");
  button.textContent = text;
  return button;
}
