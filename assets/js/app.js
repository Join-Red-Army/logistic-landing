// дождаться полной загрузки страницы
$(function() {

    let intro = $("#intro");
    let header = $("#header");
    let introH;
    let headerH;



    /* Header color */
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

    // сразу при загрузке страницы вызвать один раз
    headerScroll();
    // отслеживать скролл и поворот
    $(window).on("scroll resize", () => headerScroll());



    /* Smooth scroll to sections */


});
