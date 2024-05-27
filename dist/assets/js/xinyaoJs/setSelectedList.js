(function (xinyaoJs) {
    xinyaoJs.setSelectedList = function (data) {
        const _ = this;
        xinyaoJs.log("call: setSelectedList()");
        // xinyaoJs.log("setSelectedList data", data);

        // let selectedItems = JSON.parse(localStorage.getItem('selectedItem')) || [];
        // xinyaoJs.log(selectedItems);
        
        // // 檢查項目是否已存在於 selectedItems 中
        // const existingItemIndex = selectedItems.findIndex(item => item.name === data.name);
        // if (existingItemIndex !== -1) {
        //     // 更新已存在的項目
        //     selectedItems[existingItemIndex].amount = data.amount;
        // } else {
        //     // 添加新項目
        //     selectedItems.push(data);
        // }
        // selectedItems.push(data);
        
        // 儲存 selectedItems 到 localStorage
        localStorage.setItem('selectedList', JSON.stringify(data));

        // xinyaoJs.log("xinyaoJs.setSelectedList: ", localStorage.getItem('selectedList'));
    }
})(xinyaoJs);
