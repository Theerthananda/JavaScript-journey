function processOrder(orderId, callback) {
  const msg = "Order " + orderId + " processed";

  setTimeout(() => {
    callback(msg);
  }, 2000);
}

function callback(msg) {
    console.log(msg);
}

processOrder(101, callback);