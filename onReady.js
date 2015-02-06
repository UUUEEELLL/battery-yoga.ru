$(document).ready(function() {

    // Padding-top of icons in left col
    $( '#mainPageContent div.row' ).each(function( index ) {
        var rowH  = $( this ).innerHeight();
        if ( rowH > 170 ){
            rowH = (rowH - 140) / 2;
            $( this ).find( ".left-col" ).css("padding-top", rowH+"px");
        }
    });

    $('a[href="#timeTable"]').smoothScroll();
    $('a[href="#priceList"]').smoothScroll();



    //////////////////////////////////////////////////////
    // Инициализация кнопки НАВЕРХ -----------------------
    //////////////////////////////////////////////////////
    /*
    $.scrollUp({

        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 300, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
        //scrollTarget: false, // Set a custom target element for scrolling to the top
        scrollText: '<span class="glyphicon glyphicon-chevron-up"></span> Наверх', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647 // Z-Index for the overlay
    });/*--./Инициализация кнопки НАВЕРХ--*/


});
