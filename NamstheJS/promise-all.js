function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 101, name: "Theerthananda" });
    }, 2000);
  });
}

function fetchOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Laptop", "Mobile", "Buds"]);
    }, 3000);
  });
}

function fetchNotifications() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["New message", "Payment received"]);
    }, 1000);
  });
}

async function loadDashboard() {
  const res = await Promise.all([
    fetchUser(),
    fetchOrders(),
    fetchNotifications(),
  ]);
  console.log(res);
}

loadDashboard().catch((err) => {
  console.log(err);
});

Promise.all([fetchUser(), fetchOrders(), fetchNotifications()]).then((res) => {
  console.log(res);
});
