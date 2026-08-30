function fetchFromServerA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Server A failed !"));
    //   resolve("Server A");
    }, 3000);
  });
}

function fetchFromServerB() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
         reject(new Error("Server A failed !"));
        // resolve("Server B");
      }, 1000);
  });
}

function fetchFromServerC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Server C");
    }, 2000);
  });
}

async function getAvailableServer() {
  let response = await Promise.any([
    fetchFromServerA(),
    fetchFromServerB(),
    fetchFromServerC(),
  ]);

  console.log(response);
}

getAvailableServer().catch((err) => {
  console.log(err);
});
