
document.getElementById("subscribe").addEventListener("click", function(){
  document.querySelector(".form-popup").style.display = "flex"
});

document.querySelector(".cancel").addEventListener("click", function() {
  document.querySelector('.form-popup').style.display = "none"
})