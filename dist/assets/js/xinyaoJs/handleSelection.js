(function (xinyaoJs) {
    xinyaoJs.handleSelection = function (isUnknown, event) {
        const _ = this;
        xinyaoJs.log("call: handleSelection()");
        if (isUnknown) {
            console.log(event);
            // 點擊"無/未知"
            // 將當前的項目
            const currentItem = _.getCurrentItem();
            xinyaoJs.log("currentItem", currentItem);

            // 取得原有的 selectedList，並將當前的項目加入
            const selectedList = _.getSelectedList();
            selectedList.push(currentItem);
            _.setSelectedList(selectedList);
            xinyaoJs.log("selectedList", _.getSelectedList());

            // 關閉popup，並清除當前的項目
            const popupElm = document.querySelector(`#popup-${currentItem.id}`);
            _.closePopup(popupElm, 'clearLast');

            // 顯示訊息: "加入成功"
            const notificationElm = document.querySelector(`[data-ref="notification-add"]`);
            _.openNotification(notificationElm);

            // 更新購物車數量
            _.updateCartNum();

            // const selectedItems = _.getselectedItemTemp();
            // _.setSelectedItem(selectedItems);
            // _.clearSelectedItemTemp();
        } else {
            // 點擊"確認"
            // 取選擇的部位
            console.log(event);

        }
    }
})(xinyaoJs);
