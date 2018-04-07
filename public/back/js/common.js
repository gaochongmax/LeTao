NProgress.configure({showSpinner: false});

$(document).ajaxStart(function () {
    NProgress.start()
});

$(document).ajaxStop(function () {
    setTimeout(function () {
        NProgress.done()
    }, 500)
});

$(function () {
    $(".category").click(function () {
        $(this).next().stop().slideToggle()
    });

    $(".icon_menu").click(function () {
        $(".lt_aside").toggleClass("hidemenu");
        $(".lt_main").toggleClass("hidemenu");
        $(".lt_topbar").toggleClass("hidemenu");
    });

    $(".icon_logout").click(function () {
        $("#logoutModal").modal("show")
    });

    $("#logoutBtn").click(function () {
        $.ajax({
            url: "/employee/employeeLogout",
            type: "get",
            dataType: "json",
            success: function (info) {
                if (info.success) {
                    location.href = "login.html"
                }
            }
        })
    })
});