function getCart() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Laptop", "Mouse"]);
    }, 1000);
  });
}

function validateCart(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ valid: "valid"});
        reject(new Error("cart not vallid !"));
    }, 1000);
  });
}

function getShippingOptions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Standard", "Express"]);
    }, 3000);
  });
}
function calculatePrice(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(50000);
    }, 3000);
  });
}

function placeOrder(price, shipping) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order placed successfully");
    }, 1000);
  });
}

async function checkout() {
  const cartP = getCart();
  const shipingOpsP = getShippingOptions();

  const cart = await cartP;

  const orderInfo = await Promise.all([
    validateCart(cart),
    calculatePrice(cart),
  ]);

  const shipingops = await shipingOpsP;

  const orderStatus = await placeOrder();

  console.log("cart :" + cart.join("|"));
  console.log("Cart status :", orderInfo[0].valid);
  console.log("price :" + orderInfo[1]);
  console.log("shiping :" + shipingops[0]);
  console.log("order status :" + orderStatus);
}

checkout().catch((err) => {
  console.log(err.message);
});
