/*global document, $*/

// Smooth Scroll
$(function () {
    'use strict';
    
    $('.smooth-scroll').smoothScroll();
    
});

// Nice Scroll
$(document).ready(function () {
    'use strict';
    $("body").niceScroll({
        cursorcolor: "#00bfd8",
        cursorwidth: "12px",
        zindex: "10",
        cursorborderradius: "7px",
        cursorborder: "none"
    });
});