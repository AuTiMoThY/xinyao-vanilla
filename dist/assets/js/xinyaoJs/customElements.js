(function (xinyaoJs) {
    xinyaoJs.customElements = () => {
        function fieldFocus(elm, closestElm) {
            let thisParent = elm.closest(closestElm);
            if (thisParent) {
                thisParent.classList.add("js-focus");
            }
        }

        function fieldFocusout(elm, closestElm) {
            let thisParent = elm.closest(closestElm);
            if (thisParent) {
                thisParent.classList.remove("js-focus");
            }
        }

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
            inputField: function () {
                class inputField extends baseField {
                    constructor() {
                        // Always call super first in constructor
                        super("input-field");
                    }
                }
                customElements.define("input-field", inputField);
            },
            passwordField: function () {
                class PasswordField extends baseField {
                    constructor() {
                        // Always call super first in constructor
                        super("password-field");
                    }
                }
                customElements.define("password-field", PasswordField);
            }
        };
    };
})(xinyaoJs);
