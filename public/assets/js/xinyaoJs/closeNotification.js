(function (xinyaoJs) {
    xinyaoJs.closeNotification = function (elm) {
        xinyaoJs.log("call: closeNotification(elm)");
        setTimeout(() => {
            elm.classList.add("js-hidden");
        }, 3000);

        
    }
})(xinyaoJs);
