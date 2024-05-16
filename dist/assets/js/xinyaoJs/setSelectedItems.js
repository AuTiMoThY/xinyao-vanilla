(function (xinyaoJs) {
    xinyaoJs.setSelectedItems = function (data) {
        const _ = this;
        console.log("call: setSelectedItems()");
        console.log(data);

        let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
        // console.log(selectedItems);
        
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
        
        // 儲存 selectedItems 到 localStorage
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }
})(xinyaoJs);
