document.addEventListener("DOMContentLoaded", function () {

    xinyaoJs.log("selectedList",localStorage.getItem('selectedList'));
    // const addToListBtn = document.querySelectorAll(".action_btn.action-addToList");
    // // xinyaoJs.log(addToListBtn);

    // // 列表中點擊"加入"按鈕
    // addToListBtn.forEach((btn) => {
    //     btn.addEventListener("click", function (e) {
    //         // xinyaoJs.log(e);
    //         // xinyaoJs.log(this);
    //         const itemElm = this.closest(".xinyao_datatable-tr");
    //         const id = itemElm.getAttribute("id").slice("xinyaoItem-".length);
    //         const popupElm = document.querySelector(`#popup-${id}`);
    //         // xinyaoJs.log(popupElm);

    //         const itemObj = {
    //             name: itemElm.querySelector(".name").textContent,
    //             amount: itemElm.querySelector(".action-amount input").value,
    //         };
    //         // xinyaoJs.log(itemObj);

    //         popupElm.classList.remove("js-hidden");
    //     });
    // });
});
