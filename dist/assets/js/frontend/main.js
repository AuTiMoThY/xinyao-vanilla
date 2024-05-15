document.addEventListener("DOMContentLoaded", function () {
    xinyaoJs.init();
    xinyaoJs.customElements().inputField();
    xinyaoJs.customElements().passwordField();
    xinyaoJs.customElements().submitBtn();
    xinyaoJs.customElements().amountField();

    const simpleBar = new SimpleBar(document.querySelector(".site_aside-bd"));

    // 側邊欄
    // 選擇所有的菜單項目加上箭頭icon和點擊展開子列表的事件監聽器
    const menuItems = document.querySelectorAll(".site_menu-item");

    menuItems.forEach((item) => {
        const sublist = item.querySelector(".sublist");
        const title = item.querySelector(".inner");

        // 檢查當前項目是否有子列表，有的話加上arrow icon
        if (sublist && title) {
            item.classList.add("has-sublist");
            // 創建 SVG 元素
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            // 在這裡添加您的 SVG 屬性
            svg.setAttribute("data-src", baseUrl + "assets/images/arrow-down.svg");
            // 將 SVG 添加到標題中
            title.appendChild(svg);

            // 為標題添加點擊事件監聽器
            title.addEventListener("click", () => {
                // 切換 "open-sublist" 類
                item.classList.toggle("open-sublist");
            });
        }
    });
});
