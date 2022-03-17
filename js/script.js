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

