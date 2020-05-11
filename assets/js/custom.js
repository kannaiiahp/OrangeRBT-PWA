





        



//Side bar script
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay,.login-txt').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $

    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

//Side bar script




$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".orange-comp-header").addClass("header-active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".orange-comp-header").removeClass("header-active");
        }
    });

// Search pop up  search disable / enable
    $(".search-res-cont").on("scroll", function () {
        if ($(".search-res-cont").scrollTop() > 20) {
            $(".trending-cont").css("display", "none");
            $(".pop-search-cont").css("display", "none");
            $(".search-res-cont").css({ "height": "calc(100vh - 90px)" });


        }
        else {
            $(".trending-cont").css("display", "block");
            $(".pop-search-cont").css("display", "block");
            $(".search-res-cont").css({ "height": "calc(100vh - 290px)" });
        }
    });
});







/* search content section ST */
function openNav() {

    document.getElementById("myNav").style.height = "100%";
    document.getElementsByTagName("BODY")[0].style.overflowY = "hidden";

}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementsByTagName("BODY")[0].style.overflowY = "auto";
}

/* search content section End */


/* search content section ST */

function detail_pop() {

    document.getElementById("detail_pop").style.height = "100%";
    document.getElementsByTagName("BODY")[0].style.overflowY = "hidden";

}

function detai_closeNav() {
    document.getElementById("detail_pop").style.height = "0%";
    document.getElementsByTagName("BODY")[0].style.overflowY = "auto";
}

/* search content section End */




/* DIF - Hero Banner Script Starts */
var herobanner = new Swiper('.dif-swiper-herobanner', {
    slidesPerView: 5,
    spaceBetween: 10,
    /* autoplay: true, */
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     }, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1199.98: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        991.98: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        767.98: {
           
            slidesPerView: 2,
            spaceBetween: 10,
        },
        575.98: {
            centeredSlides: true,
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        320: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }

});
/* DIF - Hero Banner Script Ends */

/* inds-swiper01  */
var inds_swiper01 = new Swiper('.inds-swiper01-cont', {
    slidesPerView: 5.5,
    spaceBetween: 10,

    breakpoints: {
        991.98: {
            slidesPerView: 4.5,
            spaceBetween: 0,
        },
        767.98: {
            slidesPerView: 3.5,
            spaceBetween: 0,
        },
        575.98: {
            slidesPerView: 3.5,
            spaceBetween: 0,
        },
        320: {
            slidesPerView: 2.5,
            spaceBetween: 0,
        }
    }
});

/* inds-swiper02  */


/* inds-swiper02  */
var inds_swiper02 = new Swiper('.inds-swiper02-cont', {
    
    slidesPerView: 3,
    spaceBetween: 10,
    
    breakpoints: {
        991.98: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 2.25,
            spaceBetween: 0,
        },
        575.98: {
            slidesPerView: 1.2,
            spaceBetween: 0,
            
            
            
        }
    }
}) ;



/* inds-swiper02  */

/* inds-swiper02  */
var inds_swiper03 = new Swiper('.inds-swiper03-cont', {
    
    slidesPerView: 4,
    spaceBetween: 10,
    
    breakpoints: {
        991.98: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 2.25,
            spaceBetween: 0,
        },
        575.98: {
            slidesPerView: 1.2,
            spaceBetween: 0,
            
            
            
        }
    }
}) ;



/* inds-swiper02  */







/* inds-swiper03  */

/* inds-swiper04  */
var inds_swiper04 = new Swiper('.inds-swiper04-cont', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        991.98: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        767.98: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        575.98: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

/* inds-swiper04  */



/* inds-swiper05  */
var inds_swiper05 = new Swiper('.dif-swiper-cards4-sw05', {
    slidesPerView: 2.25,
    spaceBetween: 0,
    /*
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },*/
    breakpoints: {
        991.98: {
            slidesPerView: 2.25,
            spaceBetween: 0,
        },
        767.98: {
            slidesPerView: 2.25,
            spaceBetween: 0,
        },
        575.98: {
            slidesPerView: 1.25,
            spaceBetween: 0,
        }
    }
});

if ($('.dif-swiper-cards4-sw05 .swiper-slide').length == 1) {
    $('.dif-swiper-cards4-sw05').addClass('slides-count1');
} else if ($('.dif-swiper-cards4-sw05 .swiper-slide').length == 2) {
    $('.dif-swiper-cards4-sw05').addClass('slides-count2');
} else if ($('.dif-swiper-cards4-sw05 .swiper-slide').length == 3) {
    $('.dif-swiper-cards4-sw05').addClass('slides-count3');
} else if ($('.dif-swiper-cards4-sw05 .swiper-slide').length == 4) {
    $('.dif-swiper-cards4-sw05').addClass('slides-count4');
}


/* inds-swiper05  */

/* inds-swiper06  */
var inds_swiper06 = new Swiper('.inds-swiper06-cont', {
    slidesPerView: 1.5,
    spaceBetween: 0,
});

/* inds-swiper06  */



/* DIF - Cards 4 Image and Description Script Ends */

