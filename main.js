//! Operators 1
// let x = 10;
// x = x + 10;
// x += 5;
// x++;
// console.log(x + 5, x - 5, x / 5, x * 5);

//! Operators 2
//!  - / * => auto convert to Number
//! true => 1
//! false => 0
//! null => 0
// const userFirstName = "Hamid";
// const userLastName = "Abdullahi";
// console.log(userFirstName + " " + userLastName);
// console.log("4" + 2);

//! comparison operators
// const totalPrice = 100_000;
// const limit = 5_000;
// const isFree = totalPrice < limit;
// console.log(isFree);

//! Equality Operators : == === != !==
//! strict Equality : === !== => type + value
//! loost Equality : == != => value
// console.log(1 === "1"); => false
// console.log(1 == "1"); => true
// console.log(2 != "2"); => false
// console.log(2 !== "2"); => true

//! Ternary operators
// const totalPrice = 250_000;
// const discountLimit = 200_000;
// const discount = totalPrice > discountLimit ? "10%" : "5%";
// console.log("Your discount  value is" + discount);

//! Logical Operators - Boolean
//! AND => && => both of them should be True
//! OR => || => one of them is enogh True
//! ?? = null undefined
//! not => !
// const isActive = true;
// const coupenUsage = 20;
// const coupenLimit = 25;
// const isAccept = isActive && coupenUsage < coupenLimit;
// console.log(isAccept);

//! Logical Operators - non Boolean
//! falsy => "" 0 null undefined Nan
//! truthy => except above category
// const selectedColor = "Black";
// const defaulColor = "Blue";
// const userColor = selectedColor ? selectedColor : defaulColor;
// console.log(userColor);

//? Challenge
// let a = "Hamid";
// let b = "Gara";
// let c = a;
// a = b;
// b = c;
// console.log(a, b);

//? Challenge
// const birthYear = 2005;
// const nowYear = 2023;
// const convertYear = ((nowYear - birthYear) * 365) / 7;
// console.log(convertYear);

//! if else
// const paymentStatus = "SUCCESS";
// const isVrifiedPayment = true;

// if (isVrifiedPayment && paymentStatus === "SUCCESS") {
//   console.log("Your payment is Verified");
// } else if (paymentStatus === "PENDING") {
//   console.log("Your payment in Pending");
// } else {
//   console.log("Your payment is Rejevted");
// }

//! switch case
// const role = "ADMIN";

// switch (role) {
//   case "ADMIN": {
//     console.log("the user is ADMIN");
//     break;
//   }
//   case "TEACHER": {
//     console.log("the user is TEACHER");
//     break;
//   }
//   case "MANAGER": {
//     console.log("the user is MANAGER");
//     break;
//   }
//   default:
//     console.log("Unknown user");
// }

//? Challenge
// const role = "TEACHER";

// if (role === "ADMIN") {
//   console.log("the user is" + " " + role);
// } else if (role === "TEACHER") {
//   console.log("the user is" + " " + role);
// } else if (role === "MANAGER") {
//   console.log("the user is" + " " + role);
// } else {
//   console.log("Unknown user");
// }

//? Challenge
// const point = "5";
// switch (point) {
//   case "20":
//   case "19":
//   case "18": {
//     console.log("Very Good!");
//     break;
//   }
//   case "17":
//   case "16":
//   case "15":
//   case "14":
//   case "13":
//   case "12":
//   case "11":
//   case "10": {
//     console.log("Not Bad");
//     break;
//   }
//   case "9":
//   case "8":
//   case "7":
//   case "6":
//   case "5":
//   case "4":
//   case "3":
//   case "2":
//   case "1":
//   case "0": {
//     console.log("Very Bad!!!");
//     break;
//   }
// }

//! for loop
// for (let i = 100; i >= 50; i--) {
//   if (i % 2 === 0) console.log("The number is" + " " + i);
// }

//! while
// let i = 100;
// while (i >= 50) {
//   if (i % 2 === 0) console.log("The number is", i);
//   i--;
// }

//! while do
// let i = 100;
// do {
//   if (i % 2 === 0) console.log("The number is", i);
//   i--;
// } while (i >= 50);

//! for in
// const user = {
//   name: "Hamid",
//   age: 17,
//   work: "code",
// };
// for (const key in user) {
//   console.log(user[key]);
// }

//! for in
// const role = ["Teacher", "ADMIN", "Manager"];
// for (const key in role) {
//   console.log(key, role[key]);
// }

//! for of
// const role = ["Teacher", "ADMIN", "Manager"];
// for (const key of role) {
//   console.log(key);
// }
