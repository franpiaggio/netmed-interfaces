const hamburger = document.querySelectorAll('.ns-navbar__link--hamburger')[0]
const actionBar = document.querySelectorAll('.ns-navbar__actions')[0]
hamburger.onclick = function(){
    hamburger.classList.toggle('ns-navbar__link--hamburger--open')
    actionBar.classList.toggle('ns-navbar__actions--open')
}