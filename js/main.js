// Move sidebar on scroll
let sidebar = document.getElementById('sidebar');
let footer = document.getElementById('site-footer');
let offsetTop = sidebar.offsetTop;

let windowInnerWidth = window.innerWidth;
window.addEventListener('scroll', function() {
    let footerClientY = footer.getBoundingClientRect().top;
    let footerClientHeight = footer.clientHeight;

    // Stop adding margin to sidebar when users reach the end of the content.
    let stopAddMargin = footerClientY - footerClientHeight;
    if (windowInnerWidth >= 1200 && pageYOffset > offsetTop  && stopAddMargin > 0) {
        let distance = pageYOffset - offsetTop + 32;
        sidebar.style.top = distance + 'px';
    }
}, false);
