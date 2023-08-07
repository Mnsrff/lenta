// ВОЗВРАЩАЕМ LENTA.RU ПРИВЫЧНЫЙ ВИД

// определяем переменные
let topBanner, headerTime, header, content, removeAdsHandler, yandexGames, freshNews;


// удаляем верхний баннер
if (document.getElementById("billboard")) {
    topBanner = document.getElementById("billboard");
    topBanner.remove();
    console.log('Удалён верхний баннер:', new Date());
}

// удаляем дату и время
if (document.querySelector(".header__center")) {
    headerTime = document.querySelector(".header__center");
    headerTime.remove();
    console.log('Удалён верхний таймер:', new Date());
}

// меняем высоту header'a
if (document.querySelector(".layout__black-header")) {
    header = document.querySelector(".layout__black-header");
    header.style.height = "135px";
    console.log("Изменена высота header'a:", new Date());
}

// сдвигаем контент
if (document.querySelector(".layout__content")) {
    content = document.querySelector(".layout__content");
    content.style.margin = "100px auto 0";
    console.log("Подвинут сontent:", new Date());
}

// удаляем поп-ап Yandex-Games
if (document.querySelector(".yandex-games")) {
    yandexGames = document.querySelector(".yandex-games");
    // console.log(yandexGames);
    yandexGames.remove();
    console.log('Удалено Yandex Games:', new Date());
};


// функция проверки и удаления поп-апа с новыми новостями
function removeAds() {

    console.log('Запущено');

    if (document.querySelector(".js-missed-news")) {
        freshNews = document.querySelector(".js-missed-news");
        // console.log(freshNews);
        clearInterval(removeAdsHandler);
        freshNews.remove();
        // freshNews.style.display = "none";
        console.log('Удалён поп-ап:', new Date());
        console.log('Остановлено');
    };

    return;
}

removeAdsHandler = setInterval(function () {
    removeAds();
}, 1000);
