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

//! funcion
// function sayHello(name) {
//   console.log("Hi " + name + " From Hamid");
// }
// sayHello("Mohammad");
// sayHello("Ali");

//? Challenge function
// function masahatCircle(R) {
//   console.log(3.14 * R ** 2);
// }
// masahatCircle(15);

//? Challenge return
// function getUserRole(role) {
//   if (role === "ADMIN") {
//     return "The user is ADMIN";
//   } else if (role === "MANAGER") {
//     return "The user is MANAGER";
//   } else if (role === "TEACHER") {
//     return "The user is TEACHER";
//   } else {
//     return "Unkmown user role";
//   }
// }
// const userRole = getUserRole("ADMIN");
// console.log(userRole);

//* we can also write like this:
// function getUserRole(role) {
//   if (role === "ADMIN") return "The user is ADMIN";
//   if (role === "MANAGER") return "The user is MANAGER";
//   if (role === "TEACHER") return "The user is TEACHER";
//   return "Unkmown user role";
// }
// const userRole = getUserRole("ADMIN");
// console.log(userRole);

//? Challenge switvh case return
// function getUserRole(role) {
//   switch (role) {
//     case "ADMIN": {
//       return "The user is ADMIN";
//     }
//     case "MANAGER": {
//       return "The user is MANAGER";
//     }
//     default:
//       return "Unknown user role";
//   }
// }
// const userRole = getUserRole("ADMIN");
// console.log(userRole);

//? Challenge max Number
// function number(a, b) {
//   if (a > b) return a;
//   return b;

//*   return a > b ? a : b;
// }
//* console.log(number(10, 50));

//? Challenge fizzBuzz
// function fizzBuzz(number) {
//   if (typeof number !== "number") return "This is not Number";
//   if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
//   if (number % 3 === 0) return "fizz";
//   if (number % 5 === 0) return "Bizz";
// }
// console.log(fizzBuzz(15));

//? Hard Challenge of Discount
// function discount(Price) {
//   const minPrice = 50;
//   const discountPerPrice = 10;
//   const discountStep = 5;
//   const maxDiscount = 30;
//   if (Price < minPrice) return "No Discount";
//   const userDiscount = Math.floor(
//     ((Price - minPrice) / discountPerPrice) * discountStep
//   );
//   if (userDiscount > maxDiscount) return "Max Discount";
//   return "Your Discount is " + userDiscount;
// }
// console.log(discount(500));

//! object function
// const user = {
//   name: "Hamid",
//   price: 200,
//   discount: 10,
//   age: 18,
//   job: "coding",
//   course: {
//     id: 1,
//     back: "Back-End",
//     mobile: "Kotlin",
//   },
//   calcOffPrice: function () {
//     this.offPrice = this.price * (1 - this.discount / 100);
//     return this.offPrice;
//   },
// };
// console.log(user.calcOffPrice());

//! factory function
//! we can write title: title or title,
//! we can delete fanction like this:
// function creatCourse(title, price, discount) {
//   return {
//     title,
//     price,
//     discount,
//     calcOffPrice() {
//       return price * (1 - discount / 100);
//     },
//   };
// }
// console.log(creatCourse("Hamid", 200, 30).calcOffPrice());
// console.log(creatCourse("Navid", 500, 40).calcOffPrice());

//! constractor function
// function creatCourse(title, price, discount) {
//   this.title = title;
//   this.price = price;
//   this.discount = discount;
//   this.calcOffPrice = function calcOffPrice() {
//     return price * (1 - discount / 100);
//   };
// }

// const course1 = new creatCourse("React.js", 200, 10);
// console.log(course1.calcOffPrice());
//! for check :
// console.log(course1.hasOwnProperty("title"));
//! get keys or values :
// console.log(Object.keys(course1));
// console.log(Object.values(course1));
// console.log(Object.entries(course1));

//! canstactor function
// const stringLit = "Hamid";
// const stringObj = new String("Hamid");
// console.log(stringLit, typeof stringLit);
// console.log(stringObj, typeof stringObj);

// const numLit = 50;
// const numObj = new Number(50);
// console.log(numLit, typeof numLit);
// console.log(numObj, typeof numObj);

// const booleanLit = true;
// const booleanOpj = new Boolean(true);
// console.log(booleanLit, typeof booleanLit);
// console.log(booleanOpj, typeof booleanOpj);

// const arreyLit = ["A", "B", "C", "D"];
// const arreyOpj = new Array(["A", "B", "C", "D"]);
// console.log(arreyLit, typeof arreyLit);
// console.log(arreyOpj, typeof arreyOpj);

//! how to copy and change in Object and this method is for object not for string - string use noral method
// const user = {
//   name: "Hamid",
//   age: 18,
//   friends: ["Ali", "Mhmd", "Gara"],
// };

// const userCopied = Object.assign({}, user);
// userCopied.name = "Navid";
// console.log(user, userCopied);
//* if we want to change the array(friends) we should use deep copy no shadow copy

//! Object desctructuring => we can say ther name any time easy
// const user = {
//   name: "Hamid",
//   price: 200,
//   discount: 10,
//   age: 18,
//   job: "coding",
//   friend: ["Hamid", "Ali", "Gara"],
//   course: {
//     id: 1,
//     back: "Back-End",
//     mobile: "Kotlin",
//   },
//   showWellcomeMessage({ name, phoneNumber = "No phone", email = "No email" }) {
//     console.log(`Welcome ${name} with ${email} and ${phoneNumber}`);
//* we can also write Message insted of + and "" and we can use ${} and `
//   },
// };

// const { name, age, course, friend = ["MHMD"] } = user;
//* we can set defualt for arrat like this "friend OBJ"
// console.log(user, friend);
// console.log(course.back);
// user.showWellcomeMessage({
//   name: "Hamid",
//   phoneNumber: "09189189898",
//   email: "Fake@gmail.com",
// });
//

//!array desctructuring 1
// const num = [1, 2, 3, [4, 5]];
// const [a, b = 7, c, [d, e]] = num;
// console.log(a, b, c, d, e);

// //! array desctructuring 2
// const user = {
//   student: ["Hamid", "Ali", "MHMD"],
//   tag: ["Front-End", "Back-End", "Web Developer"],
//   showOrderMessage(studentIndex, tagIndex) {
//     return [this.student[studentIndex], this.tag[tagIndex]];
//   },
// };
// const [studentD, tagD] = user.showOrderMessage(2, 0);
// console.log(studentD, tagD);

//! spread operators
//* 1 add some data to end of the first:
// const arr = [4, 5];
// const arr2 = [1, 2, 3, ...arr];
// console.log(arr2);

//* 2 pass all array index as arguments:
// const arr3 = [1, 2, 3, 4, 5];
// console.log(...arr3);

//* 3 add/push item ro array
// const arr4 = [1, 2, 3, 4, 5];
// const newArr4 = [...arr4, "Full Stack"];
// console.log(newArr4);

//* 4 copy of them
// const arr5 = [1, 2, 3, 4, 5];
// const copyArr5 = [...arr5]; //shadow copy => if you change in "copyArr5" the "arr5" is not changing
// console.log(copyArr5);

//* 5 join array to array
// const frontEnd = ["HTML", "CSS", "JS"];
// const backEnd = ["next.js", "php", "c++"];
// console.log([...frontEnd, ...backEnd]);

//! Also we can use this all methods for Ssting / Not for OBJ
//* 6 string
// const str = "Hamid";
// console.log(...str); // and we can add => (... str, "Navid")
// console.log([...str]); // and we can add => ([... str, "Navid"])

//* 7 OBJ
// const user = {
//   name: "Hamid",
//   id: 1,
// };
// const newUser = { ...user };
// newUSer.email = "Fake@gmail.com";
// console.log(user, newUSer);

//! Rest operators
// const firstAray = ["Hamid", "Ali"];
// const secondAray = ["Gara", "Mohammad"];
// const [a, ...other] = [...firstAray, ...secondAray];
// console.log(a, other);

//* Object
// const user = {
//   id: 1,
//   name: "Hamid",
//   email: "fake@gmaill.com",
//   phoneNumber: "091899999999",
// };
// const { id, name, ...other } = user;
// console.log(name, other);

//* function
// function hamid(...rest) {
//   console.log(rest);
// }
// hamid(1, 2);
// hamid(1, 2), 3, 4;
// hamid(1, 2, 3, 4, 5, 6);

//* 1:
// function hamid(...rest) {
//   let total = 0;
//   for (const item of rest) total += item;
//   console.log(total);
// }
// hamid(1, 2);
// hamid(1, 2), 3, 4;
// hamid(1, 2, 3, 4, 5, 6);

//* 2;
// function getTotalPrice(discount, ...price) {
//   let total = 0;
//   for (const item of price) total += item;
//   return total * (1 - discount);
// }
// console.log(getTotalPrice(0.2, 100, 200, 300));

//! set data structure
// const user = new Set([1, 2, 3, 3, 4, 4, 5, 5]);
// console.log(user);

//* Size
// console.log(user.size);

//* check => has
// console.log(user.has(2));

//* add
// console.log(user.add(8));

//* delete
// console.log(user.delete(2));
// console.log(user);

//* clear
// user.clear();
// console.log(user);

//* loop
// for (const item of user) console.log(item);

//* use case
// const roles = ["Hamid", "Ali", "Ali", "Mohammad", "Gara"];
//* Creat unique array
// const uniqueroles = [...new Set(roles)];
// console.log(new Set(roles).size);
//* Creat unique string
// console.log([...new Set("Hamid aaadddbbhhgff")].join(""));

//! map data
// const user = new Map();

//* 1 set: return updated map and key value
// console.log(user.Set("Name", "Hamid"));

//* 2 chain set
// const randomArray = [1, 2, 3, 4, 5];
// user
//   .Set("Email", "fake@gmail.com")
//   .Set("PhoneNumber", "091899999")
//   .Set("role", "Admin")
//   .Set(randomArray, "Dummy data");

// console.log(user);

//* 3 get data
// console.log(user.get("name"));

//* 4 check exist data
// console.log(user.has("role"));

//* 5 delete
// user.delete("email");
// console.log(user);

//* 6 clear
// user.clear();

//! Example of map data type
// const Hamid = { name: "Hamid Abdullahi" },
//   Gara = { name: "Gara Kyani" },
//   Ali = { name: "Ali Ahmadi" };

// const userRole = new Map([
//   [Hamid, "Admin"],
//   [Gara, "Manager"],
//   [Ali, "Editor"],
// ]);

//* check item from the map
// console.log(userRole.get(Hamid));

//* Write keys of the map (hamid abdullahi)
// for (const user of userRole.keys()) {
//   console.log(user.name);
// }

//* Write role of the map (Admin | Manager | Editor)
// for (const role of userRole.values()) {
//   console.log(role);
// }

//* String of (user and role of the map I write)
// for (const [user, role] of userRole.entries()) {
//   console.log(user.name, role);
// }

//* Convert map keys to a array
// console.log([...userRole.keys()]);

//* Convert map value to array
// console.log([...userRole.values()]);

//! what type of data to select
//* list => set | array => 1.Unique 2. ترتیب
//* Object => object | map => key: primitive and object

//! array of object : 98%
//* json => {name, email, role}
//*jsom => [{name, email, role}, {name, email, role}, {name, email, role}]

// const user = [
//   { name: "Hamid", age: 18 },
//   { name: "Gara", age: 19 },
//   { name: "Ali", age: 20 },
// ];
// console.log(user);

//? Challenge
// const Hamid = { name: "Hamid abdullahi" },
//   Ali = { name: "Ali ahmadi" },
//   Gara = { name: "Gara kyani" },
//   Mohammad = { name: "Mohammad bazrgan" },
//   Peshawa = { name: "Peshawa NF" },
//   Raman = { name: "Raman NF" };

// const userRole = new Map([
//   [Hamid, "Admin"],
//   [Ali, "Manager"],
//   [Gara, "Admin"],
//   [Mohammad, "Editor"],
//   [Peshawa, "Editor"],
//   [Raman, "Teacher"],
// ]);
//* we can like this:
// const newUserRole = [...new Set(userRole.values())];
// console.log(newUserRole);
//* and also we can write like this:
// console.log([...new Set(userRole.values())]);
