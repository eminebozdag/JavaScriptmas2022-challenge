import products from "./products.js";

const getSaleItems = (products) => {
  const shoppingCart = products
    .filter((p) => p.type == "sweet")
    .map((p) => {
      return {
        item: p.item,
        price: p.price,
      };
    });
  return shoppingCart;
};

console.log(getSaleItems(products));
