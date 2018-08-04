const qualifyURL = function(url) {
    const a = document.createElement("a");
    a.href = url;
    return a.href;
};

const getOffset = function(el) {
    const box = el.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft
    };
};

const getScrollTop = function() {
    return (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
}

module.exports = {
    qualifyURL,
    getOffset,
    getScrollTop
};