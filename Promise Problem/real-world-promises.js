function getRestaurant() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: 10, name: "Pizza House" });
    }, 2000);
  });
}

function getMenu() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["Pizza", "Burger", "Pasta"]);
    }, 3000);
  });
}

function getOffers() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Offers service unavailable");
    }, 1000);
  });
}

function getDeliveryEstimate() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("30 minutes");
    }, 2000);
  });
}

async function loadFoodApp() {
  const orderInfo = await Promise.allSettled([
    getRestaurant(),
    getMenu(),
    getOffers(),
    getDeliveryEstimate(),
  ]);
    
    console.log(orderInfo[0].value.name);
    console.log(orderInfo[1].value.join("|"));
    console.log(orderInfo[2].reason);
    console.log(orderInfo[3].value);



}

loadFoodApp();