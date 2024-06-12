(function (xinyaoJs) {
    xinyaoJs.handleSelection = function (isUnknown, event) {
        const _ = this;
        xinyaoJs.log("call: handleSelection()");
        xinyaoJs.log("event", event);
        if (isUnknown) {
            // 點擊"無/未知"
            // 取當前的項目
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
        } else {
            // 點擊"確認"
            // 取 localStorage 的 currentItem
            let currentItem = _.getCurrentItem();
            const popupElm = document.querySelector(`#popup-${currentItem.id}`);
            xinyaoJs.log("currentItem before adding parts", currentItem);

            // 取選擇的部位
            const selectedParts = Array.from(popupElm.querySelectorAll('.select_parts-list .item_input--checkbox:checked')).map(checkbox => checkbox.value);
            xinyaoJs.log("selectedParts", selectedParts);

            // 將選擇的部位加入 currentItem 的 parts 中
            currentItem.parts = selectedParts;
            xinyaoJs.log("currentItem after adding parts", currentItem);

            // 取得原有的 selectedList，並將更新後的 currentItem 加入
            const selectedList = _.getSelectedList();
            selectedList.push(currentItem);
            _.setSelectedList(selectedList);
            xinyaoJs.log("selectedList after adding currentItem", _.getSelectedList());

            // 關閉popup，並清除當前的項目
            _.closePopup(popupElm, 'clearLast');

            // 顯示訊息: "加入成功"
            const notificationElm = document.querySelector(`[data-ref="notification-add"]`);
            _.openNotification(notificationElm);

            // 更新購物車數量
            _.updateCartNum();

        }
    }
})(xinyaoJs);
