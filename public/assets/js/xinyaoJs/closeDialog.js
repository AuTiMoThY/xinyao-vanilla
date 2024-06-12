(function (xinyaoJs) {
    xinyaoJs.closeDialog = function (elm) {
        xinyaoJs.log("call: closeDialog(elm)");
        elm.classList.add("js-hidden");
    }
})(xinyaoJs);
