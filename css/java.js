let otherLinks = document.querySelector(".other-links");
let megaMenu = document.querySelector(".megamenu");
let navLi = document.querySelectorAll(".navUl > li");
otherLinks.onclick = function(){
    megaMenu.classList.toggle("active");
    otherLinks.classList.toggle("active");
}
document.onclick = function(e){
    if (!megaMenu.contains(e.target) && !otherLinks.contains(e.target)) {
        megaMenu.classList.remove("active");
        otherLinks.classList.remove("active");
    }
}
navLi.forEach.onclick = function () {
    navLi.classList.toggle("liactive")
}
