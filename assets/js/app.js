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
        })
    }
    scrollSpy();
    $(window).on("scroll", () => scrollSpy());

});
