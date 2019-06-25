(function() {
    var baseWidth = 750;
    var baseFontSize = 100;
    var dpr = 1;
    var docEl = document.documentElement;
    var fontEl = document.createElement('style');
    var metaEl = document.querySelector('meta[name="viewport"]');
    var isIOS = navigator.userAgent.toLowerCase().match(/iphone os/i) == "iphone os";
    var scale = 1;

    // // 设置viewport，进行缩放，达到高清效果
    // metaEl.setAttribute('content',
    //     'width=device-width,height=device-height,initial-scale=' + scale + ', maximum-scale=' + scale +
    //     ',minimum-scale=' + scale + ',user-scalable=no,target-densitydpi=device-dpi');
    // 设置data-dpr属性，留作的css hack之用
    docEl.setAttribute('data-dpr', dpr);
    // 动态写入样式
    docEl.firstElementChild.appendChild(fontEl);
    window.pageScale = docEl.clientWidth / baseWidth;

    // 宽度强制等于(android手机微信中，页面跳转后，宽度变小了)
    var widthHtml = !isIOS ? 'width:' + window.screen.availWidth + 'px!important;' : '';

    fontEl.innerHTML = 'html{font-size:' + window.pageScale * 100 + 'px!important;' + widthHtml + '}';
})();