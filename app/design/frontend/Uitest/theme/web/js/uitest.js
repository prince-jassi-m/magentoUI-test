define(['jquery'], function ($) {
    'use strict';

    return function () {
        // Toggle the mini search box when the search block is clicked
        $('.block-search').click(function () {
            $('.minisearch').addClass('active');
        });

        $(document).mouseup(function(e) 
         {
             var container = $(".block-search");
             if (!container.is(e.target) && container.has(e.target).length === 0) 
             {
                  $('.minisearch').removeClass('active');
             }
         });

        
        // Show the navigation menu when the nav toggle is clicked
        $('.nav-toggle').click(function () {
            $('.navigation').addClass('active');
        });

        // Hide the navigation menu when it is clicked
        $('.navigation.active').click(function () {
            $(this).removeClass('active');
        });

        $('.customerAccountDropdown').click(function(){
            $('.customerAccounthiddenlink').toggle();
        });
    };
});