(function (xinyaoJs) {
    xinyaoJs.closePopup = function (popupElm, type = "closePopup") {
        const _ = this;
        xinyaoJs.log("call: closePopup(popupElm, type)");
        if (type == "clearLast") {
            // 移除最近一筆資料
            _.clearCurrentItem();
        }
        popupElm.classList.add("js-hidden");

    }
})(xinyaoJs);
