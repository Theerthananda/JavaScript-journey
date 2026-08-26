const cart = ['pant', 'shirt'];
// const cart = [];

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (cart.length === 0) {
      reject("Cart is empty !");
    } else {
      const orderId = cart.length * 100;
      resolve(orderId);
    }
  });
}

function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId != 0) {
      resolve({
        paymentStatus: true,
        message: "Payment successful",
      });
    } else {
      reject("Payment failed");
    }
  });
}

function showOrderStatus(paymentInfo) {
  return new Promise((resolve, reject) => {
    if (paymentInfo.paymentStatus) {
      resolve("Order placed successfully");
    } else {
      reject("Order placement failed");
    }
  });
}

createOrder(cart)
  .then((orderId) => {
    console.log("Order ID = " + orderId);
    return processPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log("Payment = " +JSON.stringify(paymentInfo));
    return showOrderStatus(paymentInfo);
  })
  .then((orderStatus) => {
    console.log(orderStatus);
  })
  .catch((err) => {
    console.error(err);
  });
