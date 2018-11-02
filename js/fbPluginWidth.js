function fbUrlWidth() {
    const url320w = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesiserve%2F&tabs=timeline%2C%20events&width=320&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId';

    const url500w = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesiserve%2F&tabs=timeline%2C%20events&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId';

    const FBsrc = document.querySelector('#fbPlugin').getAttribute('src');

    const fbPlugin = document.querySelector('#fbPlugin');

    if (window.matchMedia("(max-width: 576px)").matches) {
        if (FBsrc !== url320w) {
            fbPlugin.setAttribute('src', url320w);
            fbPlugin.setAttribute('width', 320);
        }

    } else if (window.matchMedia("(min-width: 577px)").matches) {
        if (FBsrc !== url500w) {
            fbPlugin.setAttribute('src', url500w);
            fbPlugin.setAttribute('width', 500);
        }
    }
};

window.addEventListener("resize", fbUrlWidth);
window.addEventListener("load", fbUrlWidth);
