(function (window) {
    /**
     * 默认参数
     * @type {{el: string, data: Array, speed: number, pause: number, repeat: number}}
     * @param speed 文字显示速度(ms)
     * @param pause 每条显示的停顿时间(ms)
     * @param repeat 重复第几个到末尾（默认第2个到末尾）
     */
    let defOpts = {
        data: [],
        speed: 150,
        pause: 1500,
        repeat: 2
    };

    /**
     * 广告显示
     * @param v
     * @param i
     * @param s
     * @returns {boolean}
     * @private
     */
    const _show = (v, i, s)=> {
        if (v.length == 0) return false;
        setTimeout(function () {
            const conted = setInterval(() => {
                if (s > 0 && i == v[0].text.length) {
                    clearInterval(conted);
                    _show(v, i, s * -1)
                }
                document.getElementById(defOpts.el).innerHTML = v[0].text.slice(0, i);
                i += s;
                if (s < 0 && i < v[0].len) {
                    clearInterval(conted);
                    const _data = v.slice(1);
                    if (_data.length > 0) {
                        _show(_data, _data[0].len, s * -1);
                    } else {
                        _show(defOpts.data.slice(defOpts.repeat), 0, 1);
                    }
                }
            }, defOpts.speed);
        }, defOpts.pause);
    }

    /**
     * 参数检查
     * @param opts
     * opts.data 必填
     * opts.el 必填
     */
    const validateOpts = (opts)=> {
        if (!!!opts.data) throw new Error('参数不合法，没有获取到数据,格式{data:[]}');
        if (!!!opts.el) throw new Error('参数不合法，没有指定元素ID,格式{el:"elemetId"}');
    }

    /**
     * 入口
     * @param data
     */
    window.showAD = (opts = {})=> {
        validateOpts(opts);
        Object.assign(defOpts, opts);
        _show(opts.data, 0, 1);
    }
})(window);
