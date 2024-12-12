// =================  forEach  ================

// 1-misol:
// Berilgan massivdagi barcha elementlarni ekranga chiqaruvchi dastur yozing.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];
// arr.forEach(function (arr) {
//   console.log(arr);
// });

// =================
// 2-misol:
// Massivdagi har bir elementning kvadratini hisoblang va ekranga chiqaring.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// arr.forEach(function (arr) {
//   console.log(arr ** 2);
// });

// =================
// 3-misol:
// Massivdagi barcha elementlarni ikkiga ko'paytiring va ularni yangi massivga joylang.

// let res = [];
// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// arr.forEach(function (arr) {
//   res.push(arr * 2);
// });
// console.log(res);

// =================
// 4-misol:
// Berilgan massivdan 5 dan katta bo'lgan barcha elementlarni topib, ularni ekranga chiqaruvchi dastur yozing.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// arr.forEach(function(arr) {
//    if (arr >= 5) {
//      console.log(arr);
//    }
// })

// =================
// 5-misol:
// Har bir elementga 10 qo'shib, yangi massivga saqlang

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// let res = [];

// arr.forEach(function(arr) {
//   res.push(arr + 10);

// })
// console.log(res);

// =================
// 6-misol:
// Massivdagi barcha juft sonlarni ekranga chiqaring.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// arr.forEach(function(arr){
//   if (arr % 2 == 0) {
//     console.log(arr);
//   }
// })

// =================
// 7-misol:
// Har bir elementning teskari tartibini chiqaruvchi dastur yozing (reverse bilan).

// let arr = ["hello", "apelsin", "banana", "world"];

// arr.forEach((element) => {
//   console.log(element.split("").reverse().join(""));
// });

// =================
// 8-misol:
// Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni ekranga chiqaring (includes bilan).

// let arr = ["olma", "nok", "banan", "uzum"];

// arr.forEach(function (arr) {
//   if (arr.includes("a")) {
//     console.log(arr);
//   }
// });

// =================
// 9-misol:
// Massivdagi har bir elementni yangi massivga indexOf orqali indeks bilan birlashtiring.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// let res = [];

// arr.forEach(function (index) {
//   res.push(`${index} - ${arr.indexOf(index)}`);
// });
// console.log(res);

// =================
// 10-misol:
// Har bir elementni vergul orqali birlashtirib, satr ko'rinishida chiqaruvchi dastur yozing (join bilan).

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

//   console.log(arr.join(","));

// =================
// 11-misol:
// Massivdagi har bir elementdan faqat birinchi 3 belgisini chiqaruvchi dastur yozing (slice bilan).

// let arr = ['salom', 'nok', 'ananas', 'bye'];

// arr.forEach((element) => console.log(element.toString().slice(0, 3)));

// =================
// 12-misol:
// Har bir elementning oxirgi belgisini chiqaruvchi dastur yozing.

// let arr = ["salom", "nok", "ananas", "bye"];

// arr.forEach((element) => console.log(element.slice(-1)));

// =================
// 13-misol:
// Massivdagi har bir elementni uzunligiga qarab tartiblang va natijani ekranga chiqaring (sort bilan).

// let arr = ["salom", "nok", "ananas", "bye"];

// arr.sort((a, b) => a.length - b.length);
// arr.forEach((element) => {
//   console.log(element);
// });

// =================
// 14-misol:
// Har bir elementga oxiriga ! qo'shing va yangi massivga saqlang.

// let arr = ["salom", "nok", "ananas", "bye"];
// let res = [];
// arr.forEach((element) => {
//   res.push(element + "!");
// });
// console.log(res);

// =================
// 15-misol:
// Berilgan massivning barcha elementlarini kichik harflarga o'zgartirib ekranga chiqaring.

// let arr = ["Salom", "noK", "aNanAs", "bye"];

// arr.forEach((element) => {
//   console.log(element.toLowerCase());
// });

// ========= map uchun 15 masala =========

// =================
// 1-misol:
// Massivdagi har bir elementni 2 barobar kattalashtirib yangi massivga saqlang.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// let res = arr.map(function (value) {
//   return value * 2;
// });
// console.log(res);

// =================
// 2-misol:
// Har bir elementning kvadratini hisoblab yangi massivga saqlang.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];
// let sum = 0;
// let res = arr.map(function (value) {
//   sum += value;
//   return sum;
// });
// console.log(sum);

// =================
// 3-misol:
// Massivdagi barcha elementlarni teskari tartibda yangi massivga saqlang (reverse bilan).

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   return value.split("").reverse().join("");
// });
// console.log(res);

// =================
// 4-misol:
// Har bir elementdan oxirgi 3 ta belgisini olib yangi massivga saqlang (slice bilan)

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   return value.slice(-3);
// });
// console.log(res);

// =================
// 5-misol:
// Har bir elementni katta harf bilan yozib yangi massivga saqlang.

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   return value.toUpperCase();
// });
// console.log(res);

// =================
// 6-misol:
// Har bir elementga "Hello, " qo'shib yangi massivga saqlang.

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function(value){
//   console.log("Hello, " + value);

// })

// =================
// 7-misol:
// Har bir elementni ikki marta takrorlang va yangi massivga saqlang.

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   console.log(value + value);
// });

// =================
// 8-misol:
// Har bir elementning uzunligini aniqlang va yangi massivga saqlang.

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   console.log(value.length);
// });

// =================
// 9-misol:
// Har bir elementning indeksini element bilan birlashtirib yangi massivga saqlang (indexOf bilan).

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   console.log(`${arr.indexOf(value)} - ${value}`);
// });

// =================
// 10-misol:
// Har bir elementning teskari yozilishini hisoblab yangi massivga saqlang (split, reverse, join bilan).

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   return value.split("").reverse().join("");
// });
// console.log(res);

// =================
// 11-misol:
// Massivdagi har bir elementdan boshidagi va oxiridagi belgisini olib tashlang (slice bilan).

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   return value.slice(1, -1);
// });
// console.log(res);

// =================
// 12-misol:
// Massivdagi barcha elementlarni tartiblab yangi massivga saqlang (sort bilan).

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = [...arr].sort();
// console.log(res);

// =================
// 13-misol:
// Har bir elementni katta harfga o‘zgartiring va yangi massivga saqlang.

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   return value.toUpperCase();
// });
// console.log(res);

// =================
// 14-misol:
// Har bir elementning uzunligi 5 dan katta yoki kichik ekanligini belgilang va yangi massivga saqlang.

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   return value.length >= 5;
// });
// console.log(res);

// =================
// 15-misol:
// Har bir elementdan faqat sonlarni olib yangi massivga saqlang.

// let arr = ["salom", 3, 4, "nok", 9, "ananas", 12, 7, "bye"];

// let res = arr.map(function (value) {
//   return typeof value === "number" ? value : null;
// });
// console.log(res);

// ========= filter uchun 15 masala =========

// =================
// 1-misol:
// Berilgan massivdan faqat juft sonlarni olib tashlang va yangi massivga saqlang.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// let res = arr.filter((value) => value % 2 == 0);
// console.log(res);

// =================
// 2-misol:
// Massivdan faqat manfiy sonlarni olib yangi massivga saqlang.

// let arr = [2, -3, 7, -9, 5, 3, -12, -34];

// let res = arr.filter((value) => value < 0);
// console.log(res);

// =================
// 3-misol:
// Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni olib yangi massivga saqlang (includes bilan).

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.filter((value) => value.includes("a"));
// console.log(res);

// =================
// 4-misol:
// Faqat uzunligi 5 dan katta bo'lgan elementlarni olib yangi massivga saqlang.

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.filter((value) => value.length >= 5);
// console.log(res);

// =================
// 5-misol:
// Berilgan massivdan faqat "test" so‘zini o‘z ichiga olgan elementlarni olib yangi massivga saqlang.

// let arr = ["salom", "nok", "test", "ananas", "bye", "test"];

// let res = arr.filter((value) => value.includes("test"));
// console.log(res);

// =================
// 6-misol:
// Massivdan faqat teskari tartibda joylashtirilgan elementlarni olib yangi massivga saqlang (reverse bilan).

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.filter((value) => value === value.split("").reverse().join(""));
// console.log(res);

// =================
// 7-misol:
// Massivdan faqat 0 dan katta bo'lgan sonlarni olib yangi massivga saqlang.

// let arr = [2, -3, 7, -9, 5, 3, -12, -34];

// let res = arr.filter((value) => value > 0);
// console.log(res);

// =================
// 8-misol:
// Faqat sonlar mavjud bo'lgan elementlarni olib yangi massivga saqlang.

// let arr = ["salom", 3, 4, "nok", 9, "ananas", 12, 7, "bye"];

// let res = arr.filter((value) => typeof value === "number");
// console.log(res);

// =================
// 9-misol:
// Faqat uzunligi 3 dan kichik bo‘lgan elementlarni olib yangi massivga saqlang.

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.filter((value) => value.length <= 3);
// console.log(res);

// ================= javob chiqmagan
// 10-misol:
// Berilgan massivdan faqat unli harflardan iborat elementlarni olib yangi massivga saqlang.

// let arr = ["salom", "nok", "aeo", "ananas", "uio", "bye"];

// let res = arr.filter((value) => value.includes("a", "i", "o", "u", "e"));
// console.log(res);

// =================
// 11-misol:
// Faqat boshida "abc" bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).

// let arr = ["salom", "abcnok", "ananas", "abcbye"];

// let res = arr.filter((value) => value.slice(0, 3) === "abc");
// console.log(res);

// =================
// 12-misol:
// Faqat oxirida "xyz" mavjud bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).

// let arr = ["salom", "nokxyz", "ananasxyz", "abcbye"];

// let res = arr.filter((value) => value.slice(-3) === "xyz");
// console.log(res);

// =================
// 13-misol:
// Berilgan massivdan faqat qiymati 10 dan kichik bo‘lgan sonlarni olib yangi massivga saqlang.

// let arr = [8, 17, 5, 3, 6, 1, 7, 48, 9, 31];

// let res = arr.filter((value) => value < 10);
// console.log(res);

// =================
// 14-misol:
// Faqat "test" so‘zini o‘z ichiga olmagan elementlarni olib yangi massivga saqlang (includes bilan).

// let arr = ["salom", "nok", "test", "ananas", "bye", "test"];

// let res = arr.filter((value) => !value.includes("test"));
// console.log(res);

// =================
// 15-misol:
// let arr = [
//   "salom",
//   "nok",
//   "ananas",
//   "bye",
//   "Pneumonoultramicroscopicsilicovolcanoconiosis",
// ];

// let maxLength = Math.max(...arr.map((value) => value.length));

// let res = arr.filter((value) => value.length === maxLength);

// console.log(res);

// ========= QO'SHIMCHA =========

// =================  forEach  ================

// =================
// 1-misol:
// Berilgan massivdagi barcha sonlarning kvadratlarini ekranga chiqarish.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// arr.forEach(function (value) {
//   console.log(value ** 2);
// });

// =================
// 2-misol:
// Berilgan massivdagi barcha so'zlarning uzunligini ekranga chiqarish.

// let arr = [
//   "salom",
//   "nok",
//   "ananas",
//   "bye",
//   "Pneumonoultramicroscopicsilicovolcanoconiosis",
// ];

// arr.forEach(function (value) {
//   console.log(value.length);
// });

// =================
// 3-misol:
// Berilgan massivdagi barcha sonlarni 2 ga ko'paytirish va natijani yangi massivga saqlash.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// arr.forEach(function (value) {
//   console.log(value * 2);
// });

// =================
// 4-misol:
// Berilgan massivdagi barcha elementlarga 1 qo'shish va natijani ekranga chiqarish.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// arr.forEach(function (value) {
//   console.log(value + 1);
// });

// =================
// 5-misol:
// Berilgan massivdagi barcha elementlarni kichik harflarga o'zgartirib, konsolga chiqarish.

// let arr = ["Salom", "noK", "aNanAs", "bye", "HellO"];

// arr.forEach((element) => {
//   console.log(element.toLowerCase());
// });

// =================  Map  ================

// =================
// 1-misol:
// Berilgan massivdagi barcha raqamlarning kvadratlarini yangi massivga saqlash.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// let res = arr.map(function (value) {
//   return value ** 2;
// });
// console.log(res);

// =================
// 2-misol:
// Berilgan massivdagi sonlardan faqat juft raqamlarni yangi massivga saqlash.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// let res = arr.map(function (value) {
//   return value % 2 == 0;
// });
// console.log(res);

// =================
// 3-misol:
// Berilgan massivdagi raqamlarni ikki baravarga ko'paytirish.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// let res = arr.map(function (value) {
//   return value * 2;
// });
// console.log(res);

// =================
// 4-misol:
// Berilgan massivdagi so'zlarni ularning uzunligiga qarab saralash.

// let arr = [
//   "salom",
//   "nok",
//   "ananas",
//   "bye",
//   "Pneumonoultramicroscopicsilicovolcanoconiosis",
// ];

// let res = arr.sort(function (a, b) {
//   return a.length - b.length;
// });

// console.log(res);

// =================
// 5-misol:
// Har bir elementni ikki marta takrorlang va yangi massivga saqlang.

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.map(function (value) {
//   console.log(value + value);
// });

// =================  Filter  ================

// =================
// 1-misol:
// Berilgan massivdan faqat juft sonlarni yangi massivga saqlash.

// let arr = [8, 7, 5, 3, 6, 1, 7, 4, 9, 31];

// let res = arr.filter((value) => value % 2 == 0);
// console.log(res);

// =================
// 2-misol:
// Berilgan massivdan uzunligi 4 ta yoki undan ko'proq bo'lgan so'zlarni ajratib olish.

// let arr = [
//   "salom",
//   "nok",
//   "ananas",
//   "bye",
//   "Pneumonoultramicroscopicsilicovolcanoconiosis",
// ];

// let res = arr.filter((value) => value.length >= 4);
// console.log(res);

// =================
// 3-misol:
// Berilgan massivdagi faqat musbat sonlarni ajratib olish.

// let arr = [1, -8, 64, -4, 81, 5, 9, -3, -7];

// let res = arr.filter((value) => value > 0);
// console.log(res);

// =================
// 4-misol:
// Berilgan massivdagi faqat uzunligi 3 dan katta bo'lgan so'zlarni ajratib olish.

// let arr = ["salom", "nok", "ananas", "bye"];

// let res = arr.filter((value) => value.length > 3);
// console.log(res);

// =================
// 5-misol:
// Berilgan massivdagi so'zlar orasidan "a" harfi mavjud bo‘lgan so‘zlarni ajratib olish.

// let arr = ["salom", "nok", "ananas", "bye", "hello"];

// let res = arr.filter((value) => value.includes("a"));
// console.log(res);
