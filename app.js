import { Hardware } from "./hardware.js";
import { UI } from "./ui.js";

document.addEventListener("DOMContentLoaded", UI.displayItems);

document.querySelector("#hardware-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const code = document.querySelector("#code").value;

  const hardware = new Hardware(name, price, code);
});
