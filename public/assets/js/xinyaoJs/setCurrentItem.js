(function (xinyaoJs) {
    xinyaoJs.setCurrentItem = function (data) {
        const _ = this;
        xinyaoJs.log("call: setCurrentItem(data)");
        localStorage.setItem('currentItem', JSON.stringify(data));
        xinyaoJs.log("currentItem", localStorage.getItem('currentItem'));
    }
})(xinyaoJs);
