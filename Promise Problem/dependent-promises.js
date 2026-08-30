function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 101, name: "Theerthananda" });
      // reject(new Error("user not found !"))
    }, 2000);
  });
}

function getOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Laptop", "Mobile"]);
      // reject(new Error("orders not found !"))
    }, 2000);
  });
}

function getPayment(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve({ status: "Paid", amount: 50000 });
      reject(new Error("payment failed ! !"))
    }, 1000);
  });
}

async function showUserOrder() {
  const user = await getUser();
  console.log("Id     :" + user.id + "\nName   :" + user.name);
  const orders = await getOrders(user.id);
  console.log("Items  :" + orders.join(","));
  const paymentInfo = await getPayment(orders);
  console.log(
    "status :" + paymentInfo.status + "\nAmount :" + paymentInfo.amount,
  );
}

showUserOrder().catch((err) => {
  console.error(err);
});
