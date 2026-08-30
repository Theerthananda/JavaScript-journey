function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve({ id: 101, name: "Theerthananda" });
        reject(new Error("Error while fetching user 404 !"));
    }, 2000);
  });
}

function fetchOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Laptop", "Mobile"]);
      //   reject(new Error("Error while fetching orders 404 !"));
    }, 3000);
  });
}

function fetchNotifications() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ NewMessage: "Payment received" });
      //   reject(new Error("Error while fetching notifications 404 !"));
    }, 1000);
  });
}

async function loadDashboard() {
  const customberOrderInfo = await Promise.allSettled([
    fetchUser(),
    fetchOrders(),
    fetchNotifications(),
  ]);

  console.log(customberOrderInfo);
}

loadDashboard().catch((err) => {
  console.error(err);
});
