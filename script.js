const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// function scrollToElement() {
//         var element = document.getElementById("pag1");
//         element.scrollIntoView({ behavior: "smooth" });
// }


document.addEventListener("DOMContentLoaded", function() {
    var hero = document.querySelector('.hero');
    var childCount = hero.children.length;
    hero.style.setProperty('--child-count', childCount);
});