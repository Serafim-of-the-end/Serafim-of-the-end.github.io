// var avatarka = document.querySelector("img");
// querySelector("img")=выделение только первого элемента
// avatarka.onclick = function () {
//   var mySrc = avatarka.getAttribute("src");
//   if (mySrc === "photo/зайка_1.png") {
//     avatarka.setAttribute("src", "photo/Альцгеймер_1.png");
//   } else {
//     avatarka.setAttribute("src", "photo/зайка_1.png");
//   }
// };

var avatarka = document.querySelectorAll("img")[1];
// querySelectorAll("img")=выделение всех элементов
// querySelectorAll("img")[1]=выделение второй картинки, индексирование картинок в порядке очереди
avatarka.onclick = function () {
  var mySrc = avatarka.getAttribute("src");
  if (mySrc === "photo/зайка_1.png") {
    avatarka.setAttribute("src", "photo/Альцгеймер_1.png");
  } else {
    avatarka.setAttribute("src", "photo/зайка_1.png");
  }
};
