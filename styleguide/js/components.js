//Hamburger Menu
var mainNav = document.getElementsByClassName("main-nav")[0];
var mainNavIcon = document.getElementsByClassName("main-nav__icon")[0];
mainNavIcon.addEventListener('click', function() {
    mainNav.classList.toggle("main-nav__active");
}, false);

//Social Nav Hover Events

var navSocial = document.getElementsByClassName("social__wrapper")[0];
var socialSupplemental = document.getElementsByClassName("social__supplemental")[0];

navSocial.addEventListener('mouseover', function(){
    socialSupplemental.style.display = 'block';

    addClass(navSocial, 'social-hover');

    socialSupplemental.addEventListener('mouseover', function() {
        socialSupplemental.style.display = 'block';
        addClass(navSocial, 'social-hover');
    });
    socialSupplemental.addEventListener('mouseleave', function(){
        socialSupplemental.style.display = 'none';
        removeClass(navSocial, 'social-hover');
    });
});

navSocial.addEventListener('mouseleave', function(){
    socialSupplemental.style.display = 'none';
    removeClass(navSocial, 'social-hover');
});


//Remove, add or check class of an element
function hasClass(ele,cls) {
    return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
    if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className=ele.className.replace(reg,' ');
    }
}