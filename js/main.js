$(function(){
    'use strict';
    var winH   = $(window).height();
    var upperH = $('.upper-bar').innerHeight();
    var navH   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH) - 20);


    $('.work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.suffle-img .col-lg').css('opacity', 1);
        }
        else{
            $('.suffle-img .col-lg').css('opacity', .05);
            $($(this).data('class')).parent().css('opacity', 1);
        }

    });

});