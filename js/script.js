window.addEventListener("scroll", function () {
    let scroll = document.querySelector(".upper-btn");
    scroll.classList.toggle("btn-upper-active", window.scrollY > 500);
});

function scrollTopTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -25);
        setTimeout(scrollTopTop, 0);
    }
}

function changeImage(src) {
    document.getElementById("image").src = src;
}

$(document).ready(function () {
    /*Открыть модальное окно*/
    $(".products-btn2").click(function () {
        $(".btn-overlay").css({ visibility: "visible", opacity: 1 });
        $(".btn-modal").css({ visibility: "visible", opacity: 1 });
        $("body").css({ overflow: "hidden" });
        $(".float-btn").css({ display: "none" });
    });
});
$(document).ready(function () {
    /*Открыть модальное окно*/
    $(".greenButton").click(function (e) {
        e.preventDefault();
        $(".btn-overlay").css({ visibility: "visible", opacity: 1 });
        $(".btn-modal").css({ visibility: "visible", opacity: 1 });
        $("body").css({ overflow: "hidden" });
        $(".float-btn").css({ display: "none" });
    });
});
$(document).ready(function () {
    /*Открыть модальное окно*/
    $(".greyButton").click(function (e) {
        e.preventDefault();
        $(".btn-overlay").css({ visibility: "visible", opacity: 1 });
        $(".btn-modal2").css({ visibility: "visible", opacity: 1 });
        $("body").css({ overflow: "hidden" });
        $(".float-btn").css({ display: "none" });
    });
});
/*Закрыть модальное окно*/
$(".btn-close").click(function () {
    $(".btn-overlay").css({ visibility: "hidden", opacity: 0 });
    $(".btn-modal").css({ visibility: "hidden", opacity: 0 });
    $(".float-btn").css({ display: "block" });
    $("body").css({ overflow: "visible" });
});

/*Закрыть модальное окно вне окна*/
$(document).click(function (e) {
    if ($(e.target).is(".btn-overlay")) {
        $(".btn-modal").css({ visibility: "hidden", opacity: 0 });
        $(".btn-overlay").css({ visibility: "hidden", opacity: 0 });
        $("body").css({ overflow: "visible" });
        $(".float-btn").css({ display: "block" });
    }
});
$(".btn-close").click(function () {
    $(".btn-overlay").css({ visibility: "hidden", opacity: 0 });
    $(".btn-modal2").css({ visibility: "hidden", opacity: 0 });
    $(".float-btn").css({ display: "block" });
    $("body").css({ overflow: "visible" });
});

/*Закрыть модальное окно вне окна*/
$(document).click(function (e) {
    if ($(e.target).is(".btn-overlay")) {
        $(".btn-modal2").css({ visibility: "hidden", opacity: 0 });
        $(".btn-overlay").css({ visibility: "hidden", opacity: 0 });
        $("body").css({ overflow: "visible" });
        $(".float-btn").css({ display: "block" });
    }
});

function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
    }
}

slidesPlugin(2);
