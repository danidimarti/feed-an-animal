
document.getElementById("subscribe").addEventListener("click", function(){
  document.querySelector(".form-popup").style.display = "flex"
});

document.querySelector(".cancel").addEventListener("click", function() {
  document.querySelector('.form-popup').style.display = "none"
})

// document.querySelector(".close").addEventListener("click", function() {
//   document.querySelector('#myform').style.display = "none"
// })