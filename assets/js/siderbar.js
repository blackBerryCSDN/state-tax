/**
 * Time 2018/8/24
 * Email 1554337250@qq.com
 * Author hezs
 */
if (!("sidbar" in window)) {
    window.sidbar = {}
}
jQuery(function (a) {
    window.sidbar.click_event = a.fn.tap ? "tap" : "click"
});
jQuery(function (a) {
    sidbar.handle_side_menu(jQuery);
});
sidbar.handle_side_menu = function (a) {

    var c = $("#sidebar").hasClass("menu-min");
    $("#sidebar-collapse").on("click", function () {
        $("#sidebar").toggleClass("menu-min");
        $(this).find('[class*="icon-"]:eq(0)').toggleClass("icon-angle-double-right");
        $(this).find('[class*="fa-"]:eq(0)').toggleClass("fa-angle-double-right");
        c = $("#sidebar").hasClass("menu-min");
        if (b) {$(".open > .submenu").removeClass("open");}
    });
    var b = navigator.userAgent.match(/OS (5|6|7)(_\d)+ like Mac OS X/i);
    a(".nav-list").on(sidbar.click_event,
        function (h) {
            var g = a(h.target).closest("a");
            if (!g || g.length == 0) {
                return
            }
            c = a("#sidebar").hasClass("menu-min");
            if (!g.hasClass("dropdown-toggle")) {
                if (c && sidbar.click_event == "tap" && g.get(0).parentNode.parentNode == this) {
                    var i = g.find(".menu-text").get(0);
                    if (h.target != i && !a.contains(i, h.target)) {
                        return false
                    }
                }
                if (b) {
                    document.location = g.attr("href");
                    return false
                }
                return
            }
            var f = g.next().get(0);
            if (!a(f).is(":visible")) {
                var d = a(f.parentNode).closest("ul");
                if (c && d.hasClass("nav-list")) {
                    return
                }
                d.find("> .open > .submenu").each(function () {
                    if (this != f && !a(this.parentNode).hasClass("active")) {
                        a(this).slideUp(200).parent().removeClass("open")
                    }
                })
            } else {}
            if (c && a(f.parentNode.parentNode).hasClass("nav-list")) {
                return false
            }
            a(f).slideToggle(200).parent().toggleClass("open");
            return false
        })
};



