$(() => {
  let index = 0
  function timeTick() {
    $(".option").removeClass("active")
    $(".option").eq(index).addClass('active')
    index > 3 ? index = 0 : index++
  }
  let time = setInterval(timeTick, 3000)
  $(".option").click(function (e) {
    e.preventDefault();
    e.stopPropagation()
    window.clearInterval(time)
    $(".option").removeClass("active");
    $(this).addClass("active");
    console.log($(this).index())
    index = $(this).index()
  });
  $('.option').hover(function () {
    window.clearInterval(time)
    }, function () {
      time = setInterval(timeTick, 3000)
    }
  )
})