let pName;
function toggleMenu(e) {
    console.log(e);

    const itemElm = e.closest(".favourite__datatable-data");
    console.log(itemElm);
    const menuElm = itemElm.querySelector(".action_menu");
    const allMenuElm = document.querySelectorAll(".action_menu");
    allMenuElm.forEach((item) => {
        item.classList.remove("js-show");
    });

    if (!menuElm.classList.contains("js-show")) {
        // menuElm.classList.remove("js-show");
        menuElm.classList.add("js-show");
    } else {
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".action_menu, .action_btn")) {
            const allElm = document.querySelectorAll(".action_menu");
            allElm.forEach((item) => {
                item.classList.remove("js-show");
                // if (item.classList.contains("js-show")) {
                // }
            });
        }
    });
});

// 顯示調理帖明細
function showDetail(e) {
    console.log("showDetail");

    const itemElm = e.closest(".favourite__datatable-data");
    const detailPopupElm = itemElm.querySelector(".popup_detail");

    detailPopupElm.classList.remove("js-hidden");
}



// 運行調理帖，導頁到挑選中調理帖頁面
function playItem(e) {
    console.log("playItem");
    window.location.href = `./cart.html`;
}

// 刪除調理項目，叫出刪除確認對話框
function removeItem(e) {
    console.log("removeItem");
    const itemElm = e.closest(".favourite__datatable-data");
    pName = itemElm.querySelector(".p_name").textContent;
    console.log(pName);

    const dialogElm = document.querySelector(".dialog[data-dialog='remove']");
    dialogElm.classList.remove("js-hidden");
    
    const dialogName = dialogElm.querySelector(".dialog__name");
    dialogName.textContent = pName;
}

// 刪除確認對話框，點擊刪除
function handleRemove() {
    // 取消確認
    const dialogElm = document.querySelector(".dialog[data-dialog='remove']");
    dialogElm.classList.add("js-hidden");

    // 取消成功
    const notificationElm = document.querySelector(`[data-ref="notification-remove"]`);
    notificationElm.classList.remove("js-hidden");

    const notificationName = notificationElm.querySelector(".notification__name");
    notificationName.textContent = pName;

    // 3秒後關閉
    xinyaoJs.closeNotification(notificationElm);
}