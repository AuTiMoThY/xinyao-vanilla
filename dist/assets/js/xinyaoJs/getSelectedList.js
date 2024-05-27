(function (xinyaoJs) {
    xinyaoJs.getSelectedList = function () {
        const _ = this;
        xinyaoJs.log("call: getSelectedList()");
        return JSON.parse(localStorage.getItem('selectedList') || '[]');
    }
})(xinyaoJs);
