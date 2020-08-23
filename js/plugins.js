/*global document, $*/


// Smooth Scroll
$(function () {
    'use strict';
    
    $('.smooth-scroll').smoothScroll();
    
});

// Slider
$(document).ready(function () {
    'use strict';
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});