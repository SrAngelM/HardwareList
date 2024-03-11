export class Store {
  static getItems() {
    let items;
    if (localStorage.getItem("items") === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("items"));
    }

    return items;
  }

  static addItem(item) {
    const items = Store.getItems();
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
  }

  static removeItem(code) {
    const items = Store.getItems();
    items.forEach((e, i) => {
      if (e.code === code) {
        items.splice(i, 1);
      }
    });

    localStorage.setItem("items", JSON.stringify(items));
  }
}
