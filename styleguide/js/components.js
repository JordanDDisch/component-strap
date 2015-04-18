//Hamburger Menu
var mainNav = document.getElementsByClassName("main-nav")[0];
var mainNavIcon = document.getElementsByClassName("main-nav__icon")[0];
mainNavIcon.addEventListener('click', function() {
    mainNav.classList.toggle("main-nav__active");
}, false);

//Nav Search
var search = document.getElementsByClassName('nav__search')[0];

//remove the word 'search' from the element for mobile display
var screenWidth = window.screen.width;
var maxScreenWidth = 500;

if(screenWidth < maxScreenWidth) {
    search.innerHTML = '<svg height="15" width="15" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:ns1="http://sozi.baierouge.fr" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" version="1.1"><g id="layer1" transform="translate(-290.27 -334.66)"><path block-progression:tb;text-indent:0;color:#000000;text-transform:none"="" d="m393.36 334.66c-26.422 0-52.849 10.027-72.935 30.113-40.172 40.171-40.218 105.74-0.046 145.91 35.217 35.216 89.911 39.558 129.94 13.03l60.918 60.916c8.0386 8.0384 20.97 8.0384 29.008 0 8.0387-8.0384 8.0387-20.969 0-29.008l-60.872-60.916c26.497-40.023 22.127-94.732-13.077-129.94-20.086-20.085-46.514-30.113-72.935-30.113zm-0.046 27.166c19.371 0.009 38.738 7.4275 53.596 22.285 29.716 29.715 29.762 77.521 0.046 107.24-29.716 29.715-77.523 29.715-107.24 0-29.716-29.715-29.716-77.52 0-107.24 14.858-14.858 34.225-22.295 53.596-22.285zm-54.656 99.224a2.9472 2.9471 0 0 0 -2.5325 4.236c10.265 21.49 32.226 36.328 57.602 36.328 5.5064 0 10.842-0.71645 15.932-2.0259a2.9472 2.9471 0 0 0 -0.0921 -5.7094c-25.496-5.6948-48.907-16.882-68.975-32.231a2.9472 2.9471 0 0 0 -1.9339 -0.59857z"></path></g></svg>';
}
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