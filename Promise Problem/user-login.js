function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === '123') {
        resolve({ id: 101, username: "admin" });
      } else {
        reject(new Error("Invallid username or password !"));
      }
    }, 2000);
  });
}

function getUserProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Theerthananda", role: "Admin" });
    }, 1000);
  });
}

async function displayUser() {
  const username = "admin";
  const password = '123';
  const user = await loginUser(username, password);
  console.log("Login successful!, login id = " + user.id);
  const userInfo = await getUserProfile(user.id);
  console.log("User name :" + userInfo.name);
  console.log("Role :" + userInfo.role);
}

displayUser().catch(err => {
    console.error(err.message);
})
