// дождаться полной загрузки страницы
$(function() {
    let intro = $("#intro");
    let header = $("#header");
    let introH;
    let headerH;



    // Header color
    function headerScroll() {
        introH = intro.innerHeight();
        headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();
        if (scrollTop >= introH - headerH) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
    }
    headerScroll();
    $(window).on("scroll resize", () => headerScroll());



    // Smooth scroll to sections
    $("[data-scroll]").on("click", function(event) { 
        event.preventDefault();
        
        let scrollEl = $(this).data("scroll");      // вернёт готовый #id
        let scrollElPos = $(scrollEl).offset().top; // позиция элемента от верха страницы

        $("html, body").animate({ scrollTop: scrollElPos - headerH }, 500);
    });



    // ScrollSpy
    function scrollSpy() {
        let scrollTop = $(this).scrollTop();
        $("[data-scrollspy]").each(function() {
            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top - ($(window).height() * 0.3);

            if (scrollTop >= sectionOffset) {
                $(`#nav :not([data-scroll='${sectionId}'])`).removeClass('active');
                $(`#nav [data-scroll='${sectionId}']`).addClass('active');
            }

            if (scrollTop < $(window).height() * 0.3) {
                $('#nav [data-scroll]').removeClass('active');
            }
        });
    }
    scrollSpy();
    $(window).on("scroll", () => scrollSpy());



    // Modals
    $('[data-modal]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            })
        });
    });


    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).parents('.modal');

        modalClose(modal);
    });


    $('.modal').on('click', function() {
        let modal = $(this);
        modalClose(modal);
    })


    $('.modal__content').on('click', function(event) {
        event.stopPropagation();
    })


    function modalClose(modal) {
        modal.find('.modal__content').css({
            transform: 'scale(0.5)',
            opacity: '0'
        });
        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 200);
    }



    // Slider for Intro (Slick https://kenwheeler.github.io/slick/)
    let introSlider = $("#introSlider");

     introSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
     })

     $("#introSliderPrev").on("click", function() {
        introSlider.slick("slickPrev");
     })

     $("#introSliderNext").on("click", function() {
        introSlider.slick("slickNext");
     })



    // Slider for Reviews (Slick https://kenwheeler.github.io/slick/)
    let reviewsSlider = $("#reviewsSlider");

    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500,
     })
});
