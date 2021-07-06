$(document).ready(function () {
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
    });
    //////////** products slider **//////////
    var productswiper = new Swiper('.products-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        pagination: {
            el: '.products-slider .swiper-pagination',
            clickable: true,
        },
    });
    //////////** services slider **//////////
    var serviceswiper = new Swiper('.services-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        pagination: {
            el: '.services-slider .swiper-pagination',
            clickable: true,
        },
    });

    ///////// **product-qty** ///////// 
    $(".qty-plus").on('click', function () {
        var $parentElm = $(this).parents(".item-qty");
        var maxVal = parseInt($parentElm.find(".qty-input").attr("data-max"));
        var value = $parentElm.find(".qty-input").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qty-input").val(value);
    });
    $(".qty-minus").on('click', function () {
        var $parentElm = $(this).parents(".item-qty");
        var minVal = parseInt($parentElm.find(".qty-input").attr("data-min"));
        var value = $parentElm.find(".qty-input").val();
        if (value > minVal) {
            value--;
        }
        $parentElm.find(".qty-input").val(value);
    });

    if ($(window).width() <= 991) {
        $('.menu-btn').click(function () {
            $("nav").addClass("active");
            $(".menu-overlay").fadeIn(300);
            $("body").addClass("overflow");
        })
        $('.menu-overlay,.menu-close').click(function () {
            $("nav").removeClass("active");
            $(".menu-overlay").fadeOut(400);
            $("body").removeClass("overflow");
        })
    }
    lazyLoad();
});
function lazyLoad() {
    const images = document.querySelectorAll('.lazy-img');

    const optionsLazyLoad = {
        //  rootMargin: '-50px',
        // threshold: 1
    }

    const imageObserver = new IntersectionObserver(function (enteries) {
        enteries.forEach(function (entery) {
            if (!entery.isIntersecting) {
                return;
            } else {
                preloadImage(entery.target);
                imageObserver.unobserve(entery.target);
            }
        });

    }, optionsLazyLoad);

    images.forEach(function (image) {
        imageObserver.observe(image)
    });
}

function preloadImage(img) {
    img.src = img.getAttribute('data-src');
    img.onload = function () {
        img.parentElement.classList.remove('loading-img');
        img.parentElement.classList.add("loaded-img");
        img.parentElement.parentElement.classList.add("lazy-head-img");
    }
}