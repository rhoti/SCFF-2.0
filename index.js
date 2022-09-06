parallax = document.getElementById('intro');

window.addEventListener("scroll", function(){
    let offset= window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

parallax2 = document.getElementById('hd');


window.addEventListener("scroll", function(){
    let offset= window.pageYOffset;
    parallax2.style.backgroundPositionY = offset * 1.7 + "px";
})

