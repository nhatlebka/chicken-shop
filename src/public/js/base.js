//Modal search
var navSearch = $('#nav-search');
var modalSearch = $('.modal-search');
var modalClose = $('#modal-search-close');

navSearch.click(function() {
    modalSearch.css('display', 'flex');
    modalClose.css('display', 'block');
});

modalClose.click(function() {
    modalSearch.css('display', 'none');
    modalClose.css('display', 'none');
});


//Mobile Overplay
var mobileOverplay = $('.modal-overplay-mobile');
var menuListMobile = $('.menu-list-mobile-tablet');
var menuListMobileBtn = $('.menu-mobile-list');
var menuListMobileClose = $('.menu-list-mobile-close');
var mobileListIcon = $('.nav-mobile-list-icon');
var listMobileSelect = $('.list-menu-select');

menuListMobileBtn.click(function() {
    menuListMobile.css('transform', 'translateX(0)');
    mobileOverplay.addClass('active');
});

mobileOverplay.click(function() {
    mobileOverplay.removeClass('active');
    menuListMobile.css('transform', 'translateX(-100%)');
});

menuListMobileClose.click(function() {
    mobileOverplay.removeClass('active');
    menuListMobile.css('transform', 'translateX(-100%)');
});

listMobileSelect.slideUp();

mobileListIcon.each(function(index) {
    if ($(this).html() === '<i class="fas fa-plus"></i>') {
        $(this).html('<i class="fas fa-window-minimize"></i>');
    } else $(this).html('<i class="fas fa-plus"></i>');
    $(this).click(function() {
        if ($(this).html() === '<i class="fas fa-plus"></i>') {
            $(this).html('<i class="fas fa-window-minimize"></i>');
        } else $(this).html('<i class="fas fa-plus"></i>');
        $(listMobileSelect[index]).slideToggle();
    });
});

// Scroll event
var head = $('.head');
var header = $('.header');
var marginHeader = $('.margin-header');
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 150) {
        head.css('display', 'none');
        header.css('top', 0);
    } else {
        head.css('display', 'block');
        header.css('top', 36);
    }
});

//Inpput Number

var niceNumber = $('.quantity');

niceNumber.on('change', function() {
    if (niceNumber.val() < 1) niceNumber.val() = 1;

});