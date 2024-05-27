(function (xinyaoJs) {
    xinyaoJs.removeLastSelectedItemTemp = function () {
        let selectedItems = JSON.parse(localStorage.getItem('selectedItemTemp')) || [];
        
        // 移除最後一個元素
        if (selectedItems.length > 0) {
            selectedItems.pop();
        }

        // 儲存更新後的 selectedItems 回 localStorage
        localStorage.setItem('selectedItemTemp', JSON.stringify(selectedItems));

        xinyaoJs.log("Updated selectedItemTemp after removal:", selectedItems.length, localStorage.getItem('selectedItemTemp'));
    };
})(xinyaoJs);
