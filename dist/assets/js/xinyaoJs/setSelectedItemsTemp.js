(function (xinyaoJs) {
    xinyaoJs.setSelectedItemsTemp = function (data) {
        const _ = this;
        console.log("call: setSelectedItemsTemp()");

        let selectedItems = JSON.parse(localStorage.getItem('selectedItemsTemp')) || [];
        
        // // 檢查項目是否已存在於 selectedItems 中
        // const existingItemIndex = selectedItems.findIndex(item => item.name === data.name);
        // if (existingItemIndex !== -1) {
        //     // 更新已存在的項目
        //     selectedItems[existingItemIndex].amount = data.amount;
        // } else {
        //     // 添加新項目
        //     selectedItems.push(data);
        // }
        selectedItems.push(data);

        // 儲存更新後的 selectedItems 回 localStorage
        localStorage.setItem('selectedItemsTemp', JSON.stringify(selectedItems));

        console.log(localStorage.getItem('selectedItemsTemp'));
    }
})(xinyaoJs);
