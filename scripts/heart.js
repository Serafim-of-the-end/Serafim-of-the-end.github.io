let spamInterval = null; // Интервал для спама картинок
let isSpamming = false; // Флаг: идёт ли сейчас спам
let minSpamTime = 3000; // ❗ Спам нельзя остановить первые 3 секунды после запуска
let canStop = false; // Можно ли остановить спам
let spamTimeout = null; // Таймер задержки перед началом спама
let isSecondImageActive = false; // Флаг: активна ли вторая картинка
let isSwitchBlocked = false; // ❗ Блокировка смены картинки (чтобы нельзя было сменить обратно)

// Функция создания и добавления спам-картинок на экран
function spamImage() {
  let img = document.createElement("img");
  img.src = "photo/Маленькое_сердечко_2.png"; // Моя картинка
  img.classList.add("spam-img");

  let screenWidth = window.innerWidth; // ✅ Получаем ширину экрана
  let screenHeight = window.innerHeight; // ✅ Получаем высоту экрана

  // ✅ Генерируем случайные координаты ТОЛЬКО в пределах экрана
  img.style.left = Math.random() * (screenWidth - 100) + "px";  
  img.style.top = Math.random() * (screenHeight - 100) + "px";  

  // Рандомный поворот от -60° до 60°
  let rotation = Math.random() * 120 - 60;
  img.style.transform = `rotate(${rotation}deg)`;

  document.body.appendChild(img);

  // Удаляем картинку через 3 секунд
  setTimeout(() => {
    img.remove();
  }, 3000);
}

// Функция запуска спама
function startSpam() {
  if (!isSpamming) {
    isSpamming = true;
    canStop = false; // ❗ Запрещаем остановку спама

    // Интервал между каждой картинкой спама по 20 мс
    spamInterval = setInterval(spamImage, 20);

    // ⏳ Через 3 секунды после старта спама можно будет его остановить
    setTimeout(() => {
      canStop = true;
      isSwitchBlocked = false; // ❗ Теперь можно сменить картинку обратно
    }, minSpamTime);
  }
}

// Функция остановки спама
function stopSpam() {
  if (isSpamming && canStop) {
    // Можно остановить только если прошло 3 секунды
    clearInterval(spamInterval);
    isSpamming = false;
  }
}

let avatarka = document.getElementById("avatar");

avatarka.addEventListener("click", function (event) {
  event.stopPropagation(); // Останавливаем всплытие события

  if (isSwitchBlocked) return; // ❗ Если картинка заблокирована, не даём её менять

  let mySrc = avatarka.getAttribute("src");

  if (mySrc === "photo/Сердце_Tap.png") {
    avatarka.setAttribute("src", "photo/Сердце_I_love_you_6.png");
    isSecondImageActive = true;
    isSwitchBlocked = true; // ❗ Блокируем смену картинки

    // ⏳ Задержка перед стартом спама (2 секунды)
    clearTimeout(spamTimeout);
    spamTimeout = setTimeout(() => {
      startSpam();
    }, 2000);
  } else {
    // Если мы здесь, значит можно сменить картинку обратно
    avatarka.setAttribute("src", "photo/Сердце_Tap.png");
    isSecondImageActive = false;
    isSwitchBlocked = false;
  }
});

// Клик в любом месте экрана останавливает спам, если прошло 3 секунды
document.documentElement.addEventListener("click", function (event) {
  stopSpam();
});

// Клик по аватарке тоже останавливает спам
avatarka.addEventListener("click", function (event) {
  event.stopPropagation();
  stopSpam();
});
