(function (xinyaoJs) {
    xinyaoJs.updateCartNum = function () {
        const _ = this;
        xinyaoJs.log("call: updateCartNum()");
        // 取 selectedList 的數量
        const cartNum = _.getSelectedList().length;
        // xinyaoJs.log("cartNum", cartNum);
        const cart_num = document.querySelector('.cart_num');

        if (cart_num) {
            document.querySelector('.cart_num').innerHTML = cartNum;
        }
    }
})(xinyaoJs);
