// ----------------------------------
// PRIMITIVE TIPLI VERI TURLERI

// let name = "mehmet";
// let name2 = name;

// name2 = "murat";

// console.log(name);
// console.log(name2);

// -------------------------------------- OBJECT İLE
// REFERANS TIPLI VERI TURLERI
// BURADA ORTALIK KARIŞIR, İKİSİNİ BİRDEN DEĞİŞTİRİR. İKİSİDE "MURAT" OLDU !!
// FAKAT {...user} YAPARSAN ENGELLEMİŞ OLURSUN.
// BİR DİĞER YÖNTEM İSE OBJECT.ASSIGN DIR! NEYLE NEYİ BİRLEŞTİRECEĞİNİ SÖYLEMİŞ OLURSUN
// BU NEDEN Mİ ÖNEMLİ ????
// REDUX GELİŞTİRİRKEN HER ZAMAN BİR ÖNCEKİ DURUMUN KOPYASINI ALIP ÜZERİNE YENİ DEĞİŞİKLİKLERLE GİDEREK UYGULAMAMIZI SÜRDÜRÜYORUZ.
// GERİ ALMAMIZI GEREKTİREN BİR İŞLEM YAPTIGIMIZ ZAMAN GERİ ALIRIZ
// ÖRNEĞİN CTRL+Z, ADIM ADIM GERİ ALIRIZ. ÖNCEKİ STATE IN KOPYASI ALINIR.

// const user = {
//   name: "Mehmet",
//   isActive: true,
// };

// // const user2 = { ...user };
// const user2 = Object.assign({}, user);
// user2.name = "Murat";
// user2.isActive = false;

// console.log(user);
// console.log(user2);

// --------------------------------------- ARRAY İLE
// OLAY AYNI, YA ...NUMBERS ILE YANİ SPREAD OPERATOR

const numbers = [1, 2, 3, 4];
const numbers2 = [...numbers];

numbers2.push(5);

console.log(numbers);
console.log(numbers2);

// IMMUTABLE, MUTABLE KAVRAMLARI BUDUR
