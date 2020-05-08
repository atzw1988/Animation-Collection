console.log(1)
$(() => {
  let opend = false
  $('.menu-toggle').click((e) => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('opend')
    } else {
      $('.menu-toggle').addClass('opend')
    }
    opend = !opend
  })
  $('.arrow').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('arrow')
    } else {
      $('.menu-toggle').addClass('arrow')
    }
    opend = !opend
  })
  $('.arrow-right').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('arrow-right')
    } else {
      $('.menu-toggle').addClass('arrow-right')
    }
    opend = !opend
  })
  $('.arrowalt').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('arrowalt')
    } else {
      $('.menu-toggle').addClass('arrowalt')
    }
    opend = !opend
  })
  $('.arrowalt-right').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('arrowalt-right')
    } else {
      $('.menu-toggle').addClass('arrowalt-right')
    }
    opend = !opend
  })
  $('.boring').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('boring')
    } else {
      $('.menu-toggle').addClass('boring')
    }
    opend = !opend
  })
  $('.collapse').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('collapse')
    } else {
      $('.menu-toggle').addClass('collapse')
    }
    opend = !opend
  })
  $('.collapse-right').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('collapse-right')
    } else {
      $('.menu-toggle').addClass('collapse-right')
    }
    opend = !opend
  })
  $('.elastic').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('elastic')
    } else {
      $('.menu-toggle').addClass('elastic')
    }
    opend = !opend
  })
  $('.elastic-right').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('elastic-right')
    } else {
      $('.menu-toggle').addClass('elastic-right')
    }
    opend = !opend
  })
  $('.emphatic').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('emphatic')
    } else {
      $('.menu-toggle').addClass('emphatic')
    }
    opend = !opend
  })
  $('.emphatic-right').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('emphatic-right')
    } else {
      $('.menu-toggle').addClass('emphatic-right')
    }
    opend = !opend
  })
  $('.slider').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('slider')
    } else {
      $('.menu-toggle').addClass('slider')
    }
    opend = !opend
  })
  $('.slider-right').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('slider-right')
    } else {
      $('.menu-toggle').addClass('slider-right')
    }
    opend = !opend
  })
  $('.spin').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('spin')
    } else {
      $('.menu-toggle').addClass('spin')
    }
    opend = !opend
  })
  $('.spin-right').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('spin-right')
    } else {
      $('.menu-toggle').addClass('spin-right')
    }
    opend = !opend
  })
  $('.squeeze').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('squeeze')
    } else {
      $('.menu-toggle').addClass('squeeze')
    }
    opend = !opend
  })
  $('.vortex').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('vortex')
    } else {
      $('.menu-toggle').addClass('vortex')
    }
    opend = !opend
  })
  $('.vortex-right').click(e => {
    e.preventDefault()
    if (opend) {
      $('.menu-toggle').removeClass('vortex-right')
    } else {
      $('.menu-toggle').addClass('vortex-right')
    }
    opend = !opend
  })
  $('.button').click(e => {
    e.preventDefault()
    $('.button').addClass('delete')
    setTimeout(() => {
      $('.button').removeClass('delete')
    }, 3200)
  })
  // 百叶窗旋转切换
  var oList = document.getElementById("List");
  var oCSS = document.getElementById("css");
  console.log(oCSS)
  var oBtn = document.getElementById("btns").children;
  var iW = 40;
  var shtml = "";
  var scss = "";
  var Lilength = oList.clientWidth / iW;
  var iZindex = 0;
  var iNow = 0;
  var aLi;
  var aLi = oList.children;
  for (var i = 0; i < Lilength; i++) {
    i > Lilength / 2 ? iZindex-- : iZindex++;
    shtml += '<li><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a></li>';
    scss += "#List li:nth-child(" + (i + 1) + ") a{background-position:-" + (iW * i) + "px 0}";
    scss += "#List li:nth-child(" + (i + 1) + "){z-index:" + iZindex + "}";
  }
  oList.innerHTML = shtml;
  oCSS.innerHTML += scss;
  for (var i = 0; i < oBtn.length; i++) {
    oBtn[i].index = i;
    oBtn[i].onclick = function () {
      oBtn[iNow].className = "";
      for (var i = 0; i < aLi.length; i++) {
        aLi[i].style.transition = "0.8s " + i * 50 + "ms";
        aLi[i].style.WebkitTransform = "rotateX(-" + (this.index) * 90 + "deg)";
      }

      iNow = this.index;
      oBtn[iNow].className = "active";
    }
  }
})