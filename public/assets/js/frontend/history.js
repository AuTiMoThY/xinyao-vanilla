let pName;
// 開關操作選單
function toggleMenu(e) {
    console.log(e);

    const itemElm = e.closest(".history__datatable-data");
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

// 顯示調理帖明細
function showDetail(e) {
    console.log("showDetail");

    const itemElm = e.closest(".history__datatable-data");
    const detailPopupElm = itemElm.querySelector(".popup_detail");

    detailPopupElm.classList.remove("js-hidden");
}


// 操作選單中，按下"取消運行"
function openCancelDialog(e) {
    console.log("openCancel");
    const itemElm = e.closest(".history__datatable-data");
    pName = itemElm.querySelector(".p_name").textContent;
    console.log(pName);

    const dialogElm = document.querySelector(".dialog[data-dialog='cancel']");
    dialogElm.classList.remove("js-hidden");
    
    const dialogName = dialogElm.querySelector(".dialog__name");
    dialogName.textContent = pName;
}

// 取消確認彈出框中，按下"取消運行"
function handleRunCancel(e) {
    console.log("handleRunCancel");

    // 取消確認
    const dialogElm = document.querySelector(".dialog[data-dialog='cancel']");
    dialogElm.classList.add("js-hidden");

    // 取消成功
    const notificationElm = document.querySelector(`[data-ref="notification-cancel"]`);
    notificationElm.classList.remove("js-hidden");

    const notificationName = notificationElm.querySelector(".notification__name");
    notificationName.textContent = pName;

    // 3秒後關閉
    xinyaoJs.closeNotification(notificationElm);
}


// 操作選單中，按下"再次運行"
function replay() {
    window.location.href = `./cart.html`;
}

// 操作選單中，按下"加入常用"
function addFav() {
    const notificationElm = document.querySelector(`[data-ref="notification-add_fav"]`);
    notificationElm.classList.remove("js-hidden");

    // 3秒後關閉
    xinyaoJs.closeNotification(notificationElm);
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
