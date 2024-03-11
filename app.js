import { Hardware } from "./hardware.js";
import { Store } from "./store.js";
import { UI } from "./ui.js";

document.addEventListener("DOMContentLoaded", UI.displayItems);

document.querySelector("#hardware-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const code = document.querySelector("#code").value;

  if (name === "" || price === "" || code === "") {
    UI.showAlerts("Por favor llenar los campos!", "danger");
    return;
  }

  const hardware = new Hardware(name, price, code);
  UI.addItem(hardware);
  Store.addItem(hardware);
  UI.showAlerts("Item agregado correctamente!", "success");
  UI.clearInputs();
});

document.querySelector("#item-list").addEventListener("click", (e) => {
  UI.deleteItem(e.target);
  Store.removeItem(e.target.parentElement.previousElementSibling.textContent);
  UI.showAlerts("Item removido", "info");
});
