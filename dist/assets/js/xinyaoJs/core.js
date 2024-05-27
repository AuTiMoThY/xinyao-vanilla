// > xinyao
const xinyaoJs = (function (window) {

    const debug = 1;

    const breakpoints = {
        "xxs": 0,
        "xs": 375,
        "sm": 576,
        "md": 768,
        "lg": 1024,
        "xl": 1280,
        "xxl": 1366,
        "uxl": 1680
    };

    const mqUp = Object.keys(breakpoints).reduce((acc, key) => {
        acc[key] = window.matchMedia(`(min-width: ${breakpoints[key]}px)`);
        return acc;
    }, {});

    const mqDown = Object.keys(breakpoints).reduce((acc, key, index, arr) => {
        if (index < arr.length - 1) {
            acc[key] = window.matchMedia(`(max-width: ${breakpoints[arr[index + 1]]}px)`);
        }
        return acc;
    }, {});



    // Random number functions
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }


    // https://medium.com/@mingjunlu/lazy-loading-images-via-the-intersection-observer-api-72da50a884b7
    // Lazy loading...
    function handleLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // xinyaoJs.log('支援原生 lazy loading!!');
        } else {
            // Implement fallback lazy loading here
        }
    }


    const updateCursor = ({ x, y }) => {
        document.documentElement.style.setProperty('--x', x);
        document.documentElement.style.setProperty('--y', y);

    }
    document.body.addEventListener('pointermove', updateCursor);

    return {
        /**
         * ---------------------------------------------------------------------------------
         * >> .init()
         */

        init() {
            const _ = this;
            xinyaoJs.log("_", _);
            document.body.classList.add('js-dom_ready');

            _.resizeThrottler();
            window.addEventListener('resize', _.resizeThrottler());

            handleLazyLoading();
        },

        resizeThrottler() {
            let resizeTimeout;
            if (!resizeTimeout) {
                resizeTimeout = setTimeout(function () {
                    resizeTimeout = null;
                    if (mqUp.lg.matches) {
                        document.body.classList.remove("js-open-mobile-menu");
                    }
                }, 66); // Execute at max of 15 fps
            }
        },

        /**
         * ---------------------------------------------------------------------------------
         * >> .log()  
         */
        log(label, ...args) {
            if (debug) {
                const stack = new Error().stack;
                const callerInfo = stack.split('\n')[2].trim();  // 取得呼叫 `customLog` 的堆疊資訊
                const now = new Date();
                const timestamp = now.toLocaleString('zh-TW', { 
                    year: 'numeric', 
                    month: '2-digit', 
                    day: '2-digit', 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    second: '2-digit', 
                    hour12: false 
                });
                console.log(
                    `%c${label}\n %c${callerInfo}\n %c[${timestamp}]%c\n`,
                    "color: brown; font-weight: bolder; font-size: 1.25rem;",  // label 的樣式
                    "color: blue;",   // callerInfo 的樣式
                    "color: green;",  // timestamp 的樣式
                    "color: black;",  // 重置為預設風格
                    ...args
                );
            }
        },

        detectDevice() {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;

            // 檢查是否為一般的行動裝置關鍵字
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
                return 'Mobile';
            }
            // 若未檢出行動裝置，則預設為PC
            return 'PC';
        }
    }
}(window));