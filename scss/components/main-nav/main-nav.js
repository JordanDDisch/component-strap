CheckNavClass = {

    //Remove, add or check class of an element

    hasClass: function(ele,cls) {return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));},

    addClass: function(ele,cls) {if (!this.hasClass(ele,cls)) ele.className += " "+cls;},

    removeClass: function(ele,cls) {if (this.hasClass(ele,cls)) {var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');ele.className=ele.className.replace(reg,' ');}}
};

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

    CheckNavClass.addClass(navSocial, 'social-hover');

    socialSupplemental.addEventListener('mouseover', function() {
        socialSupplemental.style.display = 'block';
        CheckNavClass.addClass(navSocial, 'social-hover');
    });
    socialSupplemental.addEventListener('mouseleave', function(){
        socialSupplemental.style.display = 'none';
        CheckNavClass.removeClass(navSocial, 'social-hover');
    });
});

navSocial.addEventListener('mouseleave', function(){
    socialSupplemental.style.display = 'none';
    CheckNavClass.removeClass(navSocial, 'social-hover');
});
