(function (xinyaoJs) {
    xinyaoJs.updateCartNum = function () {
        const _ = this;
        xinyaoJs.log("call: updateCartNum()");
        // 取 selectedList 的數量
        const cart_num = _.getSelectedList().length;
        xinyaoJs.log("cart_num", cart_num);
        document.querySelector('.cart_num').innerHTML = cart_num;
    }
})(xinyaoJs);
