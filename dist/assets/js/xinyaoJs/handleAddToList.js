(function (xinyaoJs) {
    xinyaoJs.handleAddToList = function (elm) {
        const _ = this;
        console.log("call: handleAddToList()");

        const itemElm = elm.closest(".xinyao_datatable-tr");
        const id = itemElm.getAttribute("id").slice("xinyaoItem-".length);
        const popupElm = document.querySelector(`#popup-${id}`);

        const itemObj = {
            name: itemElm.querySelector(".name").textContent,
            amount: itemElm.querySelector(".action-amount input").value,
        };
        
        _.openPopup(popupElm);
        _.setSelectedItemsTemp(itemObj);
    };
})(xinyaoJs);
