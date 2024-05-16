(function (xinyaoJs) {
    xinyaoJs.handleSelection = function (isUnknown) {
        const _ = this;
        console.log("call: handleSelection()");
        if (isUnknown) {
            // 點擊"無/未知"
            const selectedItems = _.getSelectedItemsTemp();
            _.setSelectedItems(selectedItems);
        } else {
            // 點擊"確認"
            // 取選擇的部位
        }
    }
})(xinyaoJs);
