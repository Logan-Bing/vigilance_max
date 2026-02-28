
export function Button(props) {
  const button = document.createElement("button");
  button.classList.add("bg-500-primary", "btn-primary");
  button.textContent = props.text;
  return button;
}
