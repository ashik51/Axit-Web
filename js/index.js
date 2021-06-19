window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("header").style.padding = "10px 0px";

    } else {
        document.getElementById("header").style.padding = "25px 0px";
    }
}

function tabFunction () {
    document.querySelector(".tabtext p").innerHTML = "What is up good people";
}






// Menu Toggle

var nav = document.getElementById("nav");
var navUl = document.getElementById("ul");

nav.style.maxHeight = "100px";
// navUl.style.maxHeight = "none";

function toggleMenu () {
    if (nav.style.maxHeight == "100px") {
        nav.style.maxHeight = "300px";
        navUl.style.display = "block";

    } else {        
    nav.style.maxHeight = "100px";
    navUl.style.display = "none";
    }

}
