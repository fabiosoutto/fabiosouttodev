let el = document.querySelector('.menu-icon');

el.addEventListener('click',()=>{
    let menuItens = document.querySelector('.menu-itens');

    if(menuItens.classList.contains('show')){
        menuItens.classList.add('hide');
        menuItens.classList.remove('show');
    }else{
        menuItens.classList.add('show');
        menuItens.classList.remove('hide');
    }
});


window.onscroll = function(){
    scroll();
};

function scroll(){
    let btn = document.getElementById("btntop");
    if (document.documentElement.scrollTop > 50) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function backToTop() {
    document.documentElement.scrollTop = 0;
}

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