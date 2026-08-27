function fetchProduct() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 101, name: "Laptop", price: 50000 });
    }, 2000);
  });
}

function checkStock(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ available: false, quantity: 5 });
    }, 1000);
  });
}

function placeOrder(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order placed successfully");
    }, 1000);
  });
}

async function showOrderInfo() {
  const ProductInfo = await fetchProduct();
  console.log(ProductInfo.id);
  const productAvailabality = await checkStock(ProductInfo.id);
  console.log(productAvailabality);
  if (productAvailabality.available) {
    const orderStatus = await placeOrder(ProductInfo.id);
    console.log(orderStatus);
    }
  else {
      throw new Error("Product is outof stock !")
    }
}

showOrderInfo().catch(err => {
    console.error(err.message);
})
