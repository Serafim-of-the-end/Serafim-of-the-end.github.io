    // var myHeading = document.querySelector("h1");
    // myHeading.textContent = "Hello world!";

//Выделение определенного элемента и замена другим текстом
//var=переменная
//document.querySelector("h1")=в документе нахождение элемента h1
//myHeading.textContent=замена переменной текстом

    // document.querySelector("html").onclick = function () {
    //   alert("Ouch! Stop poking me!");
    // };
//Любое косание экрана говорит вот это высплывающее сообщение
//alert=всплывающее окно

    // document.querySelector("html").onclick = function () {};
//                      равняется
    // var myHTML = document.querySelector("html");
    // myHTML.onclick = function () {};

    // var myImage = document.querySelector("img");
    // myImage.onclick = function () {
    //   var mySrc = myImage.getAttribute("src");
    //   if (mySrc === "images/firefox-icon.png") {
    //     myImage.setAttribute("src", "images/firefox2.png");
    //   } else {
    //     myImage.setAttribute("src", "images/firefox-icon.png");
    //   }
    // };
//Две фотографии сменяют друг друга

    var myImage = document.querySelector("img");
    myImage.onclick = function () {
      var mySrc = myImage.getAttribute("src");
      if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
      } else if (mySrc === "images/firefox2.png") {
        myImage.setAttribute("src", "images/firefox3.png");
      } else if (mySrc === "images/firefox3.png") {
        myImage.setAttribute("src", "images/firefox4.png");
      } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
      }
    };
// 4 фотографии сменяют друг друга
    var myButton = document.querySelector("button");
    var myHeading = document.querySelector("h1");
//Выделение нужный элементов
    function setUserName() {
      var myName = prompt("Please enter your name.");
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla is cool, " + myName;
    }
//Создание функции
//promt=диологовое окно с тестом и строкой ДЛЯ введения текста
//localStorage.setItem("name", myName); - это сохрание этого имени в ячейку
    if (!localStorage.getItem("name")) {
      setUserName();
    } else {
      var storedName = localStorage.getItem("name");
      myHeading.textContent = "Mozilla is cool, " + storedName;
    }
// Проверка на существующее имя, запись нового или старого
    myButton.onclick = function () {
      setUserName();
    };
//Вызов функции через кнопку
