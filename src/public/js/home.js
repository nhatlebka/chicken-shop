//Modal Overplay
var modalOverplay = $('.modal-overplay');
var overplayMain = $('.modal-overplay-main');
var overplayClose = $('.modal-overplay-close');

modalOverplay.click(function() {
    modalOverplay.removeClass('active');
});
overplayClose.click(function() {
    modalOverplay.removeClass('active');
});

overplayMain.click(function(e) {
    e.stopPropagation();
});

// Special Menu
var specialMenuControl = $('.special-menu-control');
var listSpecialmenu = $('.list-special-menu');

specialMenuControl.each(function(index) {
    $(this).click(function() {
        $('.special-menu-control.active').removeClass('active');
        $('.list-special-menu.active').removeClass('active');
        $(this).addClass('active');
        $(listSpecialmenu[index]).addClass('active');
    });
});

//Windown Scroll
var quantityProduct = $('.quantity-product');
var SpeMenuOfftop = $('.special-menu').offset().top;
var bannerMainOffTop = $('.banner-main').offset().top;
var quan1 = 0;
var quan2 = 0;
var quan3 = 0;
var quan4 = 0;

$(window).scroll(function(e) {
    var scrollY = window.scrollY;

    // if (scrollY > SpeMenuOfftop - 300) {
    //     $('.special-menu-title').addClass('animate__animated animate__rubberBand');
    //     $('.special-menu-main').addClass('animate__animated animate__fadeInUp');
    // } else if (scrollY < 300) {
    //     $('.special-menu-title').removeClass('animate__animated animate__rubberBand');
    //     if (scrollY < 300) $('.special-menu-main').removeClass('animate__animated animate__fadeInUp');
    // }

    if (scrollY > bannerMainOffTop + 200) {
        var times1 = setInterval(function() {
            quan1++;
            if (quan1 > 170) clearInterval(times1);
            else $(quantityProduct[0]).text(quan1);
        }, 200);
        var times2 = setInterval(function() {
            quan2++;

            if (quan2 > 524) clearInterval(times2);
            else $(quantityProduct[1]).text(quan2);
        }, 120);
        var times3 = setInterval(function() {
            quan3++;
            if (quan3 > 209) clearInterval(times3);
            else $(quantityProduct[2]).text(quan3);
        }, 180);
        var times4 = setInterval(function() {
            quan4++;
            if (quan4 > 300) clearInterval(times4);
            else $(quantityProduct[3]).text(quan4);
        }, 170);
    } else if (scrollY < bannerMainOffTop - 500) {
        quan1 = 0;
        quan2 = 0;
        quan3 = 0;
        quan4 = 0;
    }
});

//Top Selling Product
var sellingControl = $('.top-selling-control');
var sellingList = $('.list-top-selling');

sellingControl.each(function(index) {
    $(this).click(function() {
        $('.top-selling-control.active').removeClass('active');
        $(this).addClass('active');
        $('.list-top-selling.active').removeClass('active');
        $(sellingList[index]).addClass('active');
    });
});

//Modal selling product
var eyeSellingProduct = $('.check-item-eye-product');
var modalSellingProduct = $('.modal-selling-product');
var modalSellingProductMain = $('.modal-selling-product-main');
var modalSellingProductClose = $('.modal-selling-product-close');
eyeSellingProduct.click(function(e) {
    e.preventDefault();
    modalSellingProduct.addClass('active');
});

modalSellingProduct.click(function() {
    modalSellingProduct.removeClass('active');
});

modalSellingProductMain.click(function(e) {
    e.stopPropagation();
});

modalSellingProductClose.click(function() {
    modalSellingProduct.removeClass('active');
});