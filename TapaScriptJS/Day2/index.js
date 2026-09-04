// const userName = "Theerthananda";
// let age = 22;
// let isStudent = true;
// let favProgrammingLaguage = "JavaScript";

// console.log(userName);
// console.log(age);
// console.log(isStudent);
// console.log(favProgrammingLaguage);

// // userName = 'ajay';
// // console.log(userName);

// isStudent = false;
// console.log(isStudent);
// "use strict";
// let userProfile = {
//   userName: "Rahul",
//   userId: 1001,
//   userDept: "Cs",

//   displayUserInfo: function () {
//     console.log(this.userName);
//     console.log(this.userId);
//     console.log(this.userDept);
//   },
// };

// userProfile.displayUserInfo();

let userArr = [
  {
    userName: "Rahul",
    userId: 1001,
    userDept: "Cs",

    displayUserInfo: function () {
      console.log(this.userName);
      console.log(this.userId);
      console.log(this.userDept);
    },
  },

  {
    userName: "Ajay",
    userId: 1002,
    userDept: "AI & ML",
  },
];

userArr[0].displayUserInfo.call(userArr[1])
