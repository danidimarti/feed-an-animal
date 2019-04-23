$(document).ready(function () {
  $('.slider-container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),

  })
 


})

// $(document).ready(function(){
//   $('[data-toggle="popover"]').popover();   
// });

document.getElementById("feedanimal-btn").addEventListener("click", function(){
  document.querySelector(".bg-modal").style.display = "flex"
});

document.querySelector(".close").addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "none"
})

