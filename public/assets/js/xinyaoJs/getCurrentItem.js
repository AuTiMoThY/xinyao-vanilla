(function (xinyaoJs) {
    xinyaoJs.getCurrentItem = function () {
        const _ = this;
        xinyaoJs.log("call: getCurrentItem()");
        return JSON.parse(localStorage.getItem('currentItem') || '[]');
    }
})(xinyaoJs);
