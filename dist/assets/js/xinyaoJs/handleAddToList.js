(function (xinyaoJs) {
    xinyaoJs.handleAddToList = function (elm) {
        const _ = this;
        xinyaoJs.log("call: handleAddToList(elm)");

        const itemElm = elm.closest(".xinyao_datatable-tr");
        const id = itemElm.getAttribute("id").slice("xinyaoItem-".length);
        const name = itemElm.querySelector(".name").textContent;
        const amount = itemElm.querySelector(".action-amount input").value;
        const popupElm = document.querySelector(`#popup-${id}`);

        // 取初步資料(名稱、數量)
        const itemObj = {
            id: id,
            name: name,
            amount: amount,
            parts: []
        };

        xinyaoJs.log("itemObj", itemObj);

        // 打開 popup
        _.openPopup(popupElm);
        // 將資料儲存至 localStorage currentItem
        _.setCurrentItem(itemObj);

        // 設置選擇部位的監聽器
        _.setupPartSelection(popupElm);
    };
})(xinyaoJs);
