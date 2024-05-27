(function (xinyaoJs) {
    xinyaoJs.customElements = () => {
        // 欄位聚焦效果
        function fieldFocus(elm, closestElm) {
            let thisParent = elm.closest(closestElm);
            if (thisParent) {
                thisParent.classList.add("js-focus");
            }
        }
        
        // 欄位失焦效果
        function fieldFocusout(elm, closestElm) {
            let thisParent = elm.closest(closestElm);
            if (thisParent) {
                thisParent.classList.remove("js-focus");
            }
        }

        // 欄位聚焦或失焦事件監聽
        class baseField extends HTMLElement {
            constructor(closestElm) {
                super();
                this.closestElm = closestElm;

                const thisInput = this.querySelector("input");
                if (thisInput) {
                    thisInput.addEventListener("focus", () => {
                        fieldFocus(thisInput, this.closestElm);
                    });

                    thisInput.addEventListener("focusout", () => {
                        fieldFocusout(thisInput, this.closestElm);
                    });
                }
            }
        }

        return {
            // 輸入欄位
            inputField: function () {
                class inputField extends baseField {
                    constructor() {
                        // Always call super first in constructor
                        super("input-field");
                    }
                }
                customElements.define("input-field", inputField);
            },
            // 密碼欄位:
            // 顯示或隱藏密碼
            passwordField: function () {
                class PasswordField extends baseField {
                    constructor() {
                        // Always call super first in constructor
                        super("password-field");

                        const toggleButton = this.querySelector(".toggle_password_btn");
                        const input = this.querySelector("input");
                        const icons = toggleButton.querySelectorAll("i");
        
                        toggleButton.addEventListener("click", () => {
                            if (input.type === "password") {
                                input.type = "text";
                                icons[0].style.display = "none";
                                icons[1].style.display = "inline";
                            } else {
                                input.type = "password";
                                icons[0].style.display = "inline";
                                icons[1].style.display = "none";
                            }
                        });
                    }
                }
                customElements.define("password-field", PasswordField);
            },
            amountField: function () {
                class amountField extends baseField {
                    constructor() {
                        // Always call super first in constructor
                        super("amount-field");
                        // const inputValue = parseInt(this.input.value);
                        // xinyaoJs.log(inputValue);
                        this.input = this.querySelector("input");
                        this.input.value = this.input.getAttribute('value') || 1;
                        // xinyaoJs.log(this.input.value);
                        this.decrementBtn = this.querySelector(".decrement-btn");
                        this.incrementBtn = this.querySelector(".increment-btn");

                        this.decrementBtn.addEventListener("click", () => this.decrement());
                        this.incrementBtn.addEventListener("click", () => this.increment());

                    }
                    decrement() {
                        xinyaoJs.log("--");
                        let currentValue = parseInt(this.input.value);
                        if (currentValue > 1) {
                            this.input.value = --currentValue;
                        }
                    }
                    increment() {
                        xinyaoJs.log("++");
                        let currentValue = parseInt(this.input.value);
                        this.input.value = ++currentValue;
                    }
                }
                customElements.define("amount-field", amountField);
            },
            // 送出按鈕:
            // 開啟禁用按鈕，並更新按鈕文字
            submitBtn: function () {
                class submitBtn extends HTMLElement {
                    constructor() {
                        // Always call super first in constructor
                        super();
                        const btn = this.querySelector("button");
                        const defaultTxt = btn.textContent;
                        const sendingTxt = btn.dataset.sendingtxt;
                        btn.addEventListener("click", (e) => {
                            e.preventDefault;
                            if (!btn.disabled) {
                                btn.disabled = true;  // 禁用按鈕以防重複提交
                                btn.textContent = sendingTxt;  // 更新按鈕文字為 "登入中..."
                            }
                        });
                    }
                }
                customElements.define("submit-btn", submitBtn);
            }
        };
    };
})(xinyaoJs);
