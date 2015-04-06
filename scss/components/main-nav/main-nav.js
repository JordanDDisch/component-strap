var mainNav = document.getElementsByClassName("main-nav")[0];
var mainNavIcon = document.getElementsByClassName("main-nav__icon")[0];
mainNavIcon.addEventListener('click', function() {
    mainNav.classList.toggle("main-nav__active");
}, false);
