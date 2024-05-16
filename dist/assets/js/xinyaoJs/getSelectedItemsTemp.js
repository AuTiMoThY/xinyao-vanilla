(function (xinyaoJs) {
    xinyaoJs.getSelectedItemsTemp = function () {
        const _ = this;
        console.log("call: getSelectedItemsTemp()");
        return JSON.parse(localStorage.getItem('selectedItemsTemp') || '[]');
    }
})(xinyaoJs);
