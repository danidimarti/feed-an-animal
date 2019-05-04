
document.getElementById("subscribe").addEventListener("click", function(){
  document.querySelector(".form-popup").style.display = "flex"
});

document.querySelector(".cancel").addEventListener("click", function() {
  document.querySelector('.form-popup').style.display = "none"
})


function closeFunction() {
  document.querySelector(".close").addEventListener("click", function() {
    console.log("clicked")
    document.querySelector('#newsletterform').style.display = "none"
    document.querySelector('.form-popup').style.display = "none"
  });
}
