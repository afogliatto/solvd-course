function calculateDiscountedPrice(products, discountPercentage) {
  if (discountPercentage < 0) {
    throw new Error("Discount percentage cannot be negative")
  }
  if (discountPercentage > 100) {
    throw new Error ("Discount percentage cannot be over 100%")
  }
  const discountedProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const discountedPrice = product.price * (1 - discountPercentage / 100);

    const discountedProduct = {
      ...product,
      discountedPrice: discountedPrice.toFixed(2),
    };

    discountedProducts.push(discountedProduct);
  }

  return discountedProducts;
}

function calculateTotalPrice(products) {
  return products.reduce((total, product) => total + product.price, 0);
}

module.exports = {
  calculateDiscountedPrice,
  calculateTotalPrice,
};
