(function (xinyaoJs) {
    xinyaoJs.clearCurrentItem = function () {
        xinyaoJs.log("call: clearCurrentItem()");
        localStorage.removeItem('currentItem');

        xinyaoJs.log("xinyaoJs.clearCurrentItem: ", localStorage.getItem('currentItem'));
    };
})(xinyaoJs);
