(function (xinyaoJs) {
    xinyaoJs.getSelectedItems = function () {
        const _ = this;
        console.log("call: getSelectedItems()");
        return JSON.parse(localStorage.getItem('selectedItems') || '[]');
    }
})(xinyaoJs);
