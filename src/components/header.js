import { Button } from "./atomes/button";

export function Header() {
  const template = document
    .querySelector("#header-template")
    .content
    .cloneNode(true);

  return template;
}
