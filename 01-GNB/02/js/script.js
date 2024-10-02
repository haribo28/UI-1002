$(function () {
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");

    // GNB
    $menu.on("mouseenter", function () {
        $submenu.stop().slideDown(duration);
    });

    $menu.on("mouseleave", function () {
        $submenu.stop().slideUp(duration);
    });
});
