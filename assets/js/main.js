(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".bar-icon").click(function(){
            $(".responsive-header").toggleClass("siteBar")
        })
        // slider   
        $(".hero-wrep").owlCarousel({
            items:1, 
            nav:false,
            dot:true,
            loop:true, 
            autoplay:true,
            autoplayTimeout:3000,
            smartSpeed:1000, 
          
          });
        // $(".item-slider").owlCarousel({
        //     items:3, 
        //     dot:true,
        //     loop:true, 
        //     autoplay:false,
        //     autoplayTimeout:3000,
        //     smartSpeed:1000, 
          
        // });
        // $(".hero-wrep").owlCarousel({
        //     items:1, 
        //     dot:true,
        //     loop:true, 
        //     autoplay:false,
        //     autoplayTimeout:3000,
        //     smartSpeed:1000, 
          
        // });

    $('.owl-carousel.item-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        center: true,
        autoplayTimeout:3000,
        smartSpeed:1000,   
        responsive:{
            0:{
                items:1,
                margin:0,
                center:false,

            },
            576:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            }
        }
    })   
           
        
        // magnific POup 
          $('.mfp-play').magnificPopup({type:'iframe'});
    });
 
}(jQuery));	