import products from "./data.js";

const sortProducts = (data) => {
  return data
    .sort((a, b) => {
      return a.price - b.price;
    })
    .map((d) => `${d.product},${d.price}`)
    .join("\n");
};

const listByCheapest = sortProducts(products);
console.log(listByCheapest);
