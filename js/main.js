

$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})
const text = "KlassyCafe"
let indexTitle = 0
const writeTitle = () =>{
    document.getElementById("title").innerHTML = text.slice(0, indexTitle);
    indexTitle++;
    if(indexTitle > text.length){
        indexTitle = 0
    }
}
setInterval(writeTitle, 300)


  