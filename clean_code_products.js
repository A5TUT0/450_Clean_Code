let products = [
  { id: 1, n: "Laptop", c: 999 },
  { id: 2, n: "Smartphone", c: 599 },
  { id: 3, n: "Headphones", c: 199 },
];

function getProductById(products, id) {
  for (let product of products) {
    if (product.pid == id) return product;
  }
}

function ap(name, cost) {
  let maxId = 0;
  for (let p of ps) {
    if (p.pid > maxId) maxId = p.pid;
  }
  ps.push({ pid: maxId + 1, n: name, c: cost });
}

function lp() {
  for (let p of ps) {
    console.log(p.n + " costs " + p.c + "€");
  }
}

// Use functions
let p1 = gp(2);
console.log(p1);
ap("Tablet", 399);
lp();
