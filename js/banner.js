$(() => {
  let index = 0
  function timeTick() {
    console.log(index)
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
    console.log('移入')
    }, function () {
      console.log('移出')
      tiem = setInterval(timeTick, 3000)
    }
  )
})