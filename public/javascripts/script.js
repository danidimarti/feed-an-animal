$(document).ready(function () {
  $('.slider-container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),

  })

  $("#subscribe-button").click((event) => {
    event.preventDefault()

    const subname = $("#name-newsletter").val()
    const subemail = $("#email-newsletter").val()
    const data = { firstname: subname, email: subemail }
    axios.post("/subscribe", data)
      .then((subscriber) => {
        $('#myForm').html($('#success').html())
      })
      .catch((err) => {
        console.log("Newsletter Subscription failed", err)
      })

   
  })

  $(".feed-button").click((event) => {
    const dataset = event.target.dataset
    console.log(dataset)
  })


})

