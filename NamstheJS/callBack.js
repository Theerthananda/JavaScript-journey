const cart = ["pant", "shirt", "laptop"];
function createOrder(cart, callback) {
  setTimeout(() => {
    let orderId;
    if (cart.length == 0) {
      orderId = 0;
      callback(orderId);
      console.log("Order Id :" + orderId);
      console.log("Itmes :" + cart.join("|"));
    } else {
      orderId = cart.length * 4;
      callback(orderId);
      console.log("Order Name :" + orderId);
      console.log("Itmes :\n" + cart.join(" <> "));
    }
  }, 2000);
}

function ProcedeTopayment(orderId, callback) {
  setTimeout(() => {
    if (orderId != 0) {
      callback(true);
    } else {
      callback(false);
    }
  }, 4000);
}

function orderStatus(paymentInfo, callBack) {
  setTimeout(() => {
    if (paymentInfo) {
      callBack("Payment done !");
    } else {
      callBack("Failed !");
    }
  }, 6000);
}

createOrder(cart, function (orderId) {
  ProcedeTopayment(orderId, function (paymentinfo) {
    orderStatus(paymentinfo, function (status) {
      console.log(status);
    });
  });
});
