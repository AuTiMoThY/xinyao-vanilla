(function (xinyaoJs) {
    xinyaoJs.setupPartSelection = function (popupElm) {
        const checkboxes = popupElm.querySelectorAll('.select_parts-list .item_input--checkbox');
        const confirmButton = popupElm.querySelector('.popup-ft .xinyao_btn-has_part');



        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
                confirmButton.disabled = !anyChecked;
            });
        });
    };
})(xinyaoJs);
