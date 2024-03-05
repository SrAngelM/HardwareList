export class UI {
  static displayItems() {
    const storedItems = [
      {
        name: "Memoria Ram 8gb Hyperx",
        price: 150.25,
        code: "123ASDASDAXD",
      },
      {
        name: "SDD 256GB Kingstone",
        price: 102.1,
        code: "213EZXC2ZZZ",
      },
    ];

    const items = storedItems;
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
}
