import { Store } from "./store.js";

export class UI {
  static displayItems() {
    const items = Store.getItems();
    items.forEach((item) => {
      return UI.addItem(item);
    });
  }
  static addItem(item) {
    const list = document.querySelector("#item-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.code}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.append(row);
  }

  static showAlerts(msg, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.append(document.createTextNode(msg));
    const container = document.querySelector(".container");
    const form = document.querySelector("#hardware-form");
    container.insertBefore(div, form);
    setTimeout(() => div.remove(), 3000);
  }

  static clearInputs() {
    document.querySelector("#name").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#code").value = "";
  }
  static deleteItem(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
}
