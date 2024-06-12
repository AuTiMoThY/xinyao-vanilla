(function (xinyaoJs) {
    xinyaoJs.toggleSearch = function () {
        const _ = this;
        xinyaoJs.log("call: toggleSearch()");

        document.body.classList.toggle("js-open-search");
    }
})(xinyaoJs);
