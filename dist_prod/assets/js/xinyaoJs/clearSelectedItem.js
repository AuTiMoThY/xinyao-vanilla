(function (xinyaoJs) {
    xinyaoJs.clearSelectedItem = function () {
        console.log("call: clearSelectedItem()");
        // localStorage.removeItem('selectedItem');
        // 或者如果你想保留 key 而只是清空數組，可以使用以下代碼
        localStorage.setItem('selectedItem', JSON.stringify([]));
    };
})(xinyaoJs);
