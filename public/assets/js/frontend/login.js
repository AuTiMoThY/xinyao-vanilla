document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = this.querySelector(".login_submit");
    const defaultTxt = submitBtn.textContent;
    const userIdInput = document.getElementById("user_id");
    const userPwInput = document.getElementById("user_pw");

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // 清除先前的錯誤訊息
        document.querySelectorAll(".error-msg").forEach(elem => elem.textContent = "");


        // 驗證用戶ID
        if (!userIdInput.value.trim()) {
            const errorMsg = userIdInput.closest(".xinyao_field-block").querySelector(".error-msg");
            setTimeout(() => {
                errorMsg.textContent = "帳號是必填項目";
                submitBtn.disabled = false;
                submitBtn.textContent = defaultTxt;
            }, 300);
        }
        
        // 驗證密碼
        if (!userPwInput.value.trim()) {
            const errorMsg = userPwInput.closest(".xinyao_field-block").querySelector(".error-msg");
            setTimeout(() => {
                errorMsg.textContent = "密碼是必填項目";
                submitBtn.disabled = false;
                submitBtn.textContent = defaultTxt;
            }, 300);
        }
        
        // 檢查是否所有欄位都已填寫
        if (userIdInput.value.trim() && userPwInput.value.trim()) {
            // 設定初始資料
            let selectedList = JSON.parse(localStorage.getItem('selectedList')) || [];
            let selectedListFormFav = JSON.parse(localStorage.getItem('selectedListFormFav')) || [];
            localStorage.setItem('selectedList', JSON.stringify(selectedList));
            localStorage.setItem('selectedListFormFav', JSON.stringify(selectedListFormFav));

            setTimeout(() => {
                // document.getElementById("loginForm").submit();

                // 判斷裝置
                if (xinyaoJs.detectDevice() == 'Mobile') {
                    // 手機版: 導頁至選單頁
                    window.location.href = "home.html";
                }
                else {
                    // 電腦版: 導頁至心藥目錄頁
                    window.location.href = "xinyao-1.html";
                }
            }, 300); // 延遲 0.3 秒後送出表單
        }
    })
});