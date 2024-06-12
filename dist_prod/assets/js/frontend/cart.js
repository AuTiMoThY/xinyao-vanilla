function handleAddToFavorite() {
    console.log("handleAddToFavorite");

    // 顯示訊息: "加入成功"
    const notificationElm = document.querySelector(`[data-ref="notification-add"]`);
    xinyaoJs.openNotification(notificationElm);
}
function handleStartCooking() {
    console.log("handleStartCooking");

    // 顯示訊息: "送出成功"
    const notificationElm = document.querySelector(`[data-ref="notification-send"]`);
    xinyaoJs.openNotification(notificationElm);
    setTimeout(() => {
        window.location.href = `./history.html`;
    }, 1000);
}