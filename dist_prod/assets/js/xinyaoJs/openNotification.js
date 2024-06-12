(function (xinyaoJs) {
    xinyaoJs.openNotification = function (elm) {
        xinyaoJs.log("call: openNotification(elm)");
        elm.classList.remove("js-hidden");

        // 3秒後自動關閉
        setTimeout(function () {
            elm.classList.add("js-hidden");
        }, 3000);
    }
})(xinyaoJs);
