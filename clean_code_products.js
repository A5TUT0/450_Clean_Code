let products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 599 },
  { id: 3, name: "Headphones", price: 199 },
];

function getProductById(products, id) {
  for (let product of products) {
    if (product.id == id) return product;
  }
}

function addProduct(products, name, cost) {
  let maxId = 0;
  for (let product of products) {
    if (product.id > maxId) maxId = product.id;
  }
  return products.push({ id: maxId + 1, name: name, price: cost });
}

function listProduct(products) {
  for (let product of products) {
    return product.name + " costs " + product.price + "€";
  }
}

console.log(getProductById(products, 2));
addProduct(products, "Tablet", 399);
console.log(listProduct(products));
