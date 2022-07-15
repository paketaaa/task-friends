document.addEventListener('DOMContentLoaded', () => {
    const headerBurger = $(".header__burger")
    const headerNav = $(".header-nav")
    const headerDropdown = $(".header-dropdown")

    function noscrollToggle(){
        $("body").toggleClass("noscroll")
    }

    function openDropdown (){
        headerBurger.toggleClass("header-burger--active")
        headerDropdown.slideToggle()
        noscrollToggle()
    }

    headerBurger.on("click", openDropdown)

    if (window.matchMedia("(max-width: 991px)").matches) {
        headerNav.appendTo($(".header-dropdown .header-dropdown__container"))
    }

    $(window).resize("dynamicChild", function () {
        if (window.matchMedia("(max-width: 991px)").matches) {
            headerNav.appendTo($(".header-dropdown .header-dropdown__container"))
        } else {
            headerNav.insertBefore($(".header__burger"))
        }
    })
});