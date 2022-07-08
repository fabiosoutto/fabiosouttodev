window.onscroll = function(){
    scroll();
};

function scroll(){
    let btn = document.getElementById("btntop9");
    if (document.documentElement.scrollTop > 50) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function backToTop() {
    document.documentElement.scrollTop = 0;
}

// código do texto animado data-show
setInterval(function () {
    const show = document.querySelector('span[data-show]')
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')

    if (up) {
        up.removeAttribute('data-up')
    }

    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')

    next.setAttribute('data-show', '')

}, 2000)