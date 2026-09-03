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
      //   resolve(["Laptop", "Mobile", "Buds"]);
      reject(new Error("order fetching failed"));
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
  const res = await Promise.allSettled([
    fetchUser(),
    fetchOrders(),
    fetchNotifications(),
  ]);
  console.log(res);
}

loadDashboard().catch((err) => {
  console.error(err.message);
});

// Promise.allSettled([fetchUser(), fetchOrders(), fetchNotifications()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });
