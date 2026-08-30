function fetchUser() {
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 101, name: "Theerthananda" });
    }, 2000);
  });

  return prom;
}

function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Laptop", "Mobile", "Buds"]);
    }, 3000);
  });
}

async function loadDashboard() {
  try {
    const userP = fetchUser();
    const productsP = fetchProducts();

    console.log(userP);
    console.log(productsP);

    const user = await userP;
    const products = await productsP;

    //   const user = await fetchUser();
    //   const products = await fetchProducts();

    console.log(user);
    console.log(products);
  } catch (err) {
    console.log(err);
  }
}

loadDashboard();
