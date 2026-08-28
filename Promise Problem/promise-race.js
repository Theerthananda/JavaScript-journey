function fetchFromServerA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject(new Error("Server A failed !"));
        resolve("Server A")
    }, 1000);
  });
}

function fetchFromServerB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Server B");
    }, 1000);
  });
}

function fetchFromServerC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Server C");
    }, 100);
  });
}

async function getFastestServer() {
  let response = await Promise.race([
    fetchFromServerA(),
    fetchFromServerB(),
    fetchFromServerC(),
  ]);

  console.log(response);
}

getFastestServer().catch(err => {
    console.log(err);
})
