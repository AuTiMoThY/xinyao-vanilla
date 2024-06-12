(function (xinyaoJs) {
    xinyaoJs.getSelectedList = function () {
        const _ = this;
        xinyaoJs.log("call: getSelectedList()");
        xinyaoJs.log("selectedList", localStorage.getItem('selectedList'));
        return JSON.parse(localStorage.getItem('selectedList') || '[]');
    }
})(xinyaoJs);
