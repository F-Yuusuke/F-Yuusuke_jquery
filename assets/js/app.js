$(function() {
    //ボタンのサイズ変更
    $("#js-click-btn").on("click", function() {
      $(this).addClass("large-btn");
    });

  //ボタンの色変更
  $("#js-hover-btn")
    .on("mouseover", function() {
      $(this).addClass("opacity");
    })
    .on("mouseleave", function() {
      $(this).removeClass("opacity");
    });



  //要素の表示切り替え
//   $("#js-show-btn").on("click", function() {
//     $("#js-target-element").fadeIn(6000);
//   });

//   $("#js-hide-btn").on("click", function() {
//       $("#js-target-element").fadeOut(1000);
//     });
    //   これを使えばアハ体験の奴が作れるかもしれないね

//   上に上がっていく
  $("#js-show-btn").on("click", function() {
    $("#js-target-element").slideDown(6000);
  });

  $("#js-hide-btn").on("click", function() {
      $("#js-target-element").slideUp(1000);
    });



  //要素の追加
  // 要素の前後(外)に追加
  $("#js-add-btn").on("click", function() {
    beforeBtn = $("<li>")
      .addClass("btn")
      .text("ボタンの前に追加");

    afterBtn = $("<li>")
      .addClass("btn")
      .text("ボタンの後ろに追加");

    $(this).before(beforeBtn);
    $(this).after(afterBtn);
    // $(this).before('<li class="btn">ボタンの前に追加</li>');
    // $(this).after('<li class="btn">ボタンの後ろに追加</li>');
  });


    //要素の前後(中)に追加
    $("#js-add-btn2").on("click", function() {
        $(this).prepend("前");
        $(this).append("後");
      });  //toggleメニュー






      $(".js-toggle").on("click", function() {
        $(this).toggleClass("on");
        $(this)
          .siblings()
        //   シブリングスは兄弟という意味
          .slideToggle();
        //   兄弟の項目をスライドして出すよという意味
      });





//ハンバーガーメニュー
$(".js-hamburger").on("click", function() {
    $(this).toggleClass("on");
  });

  //スムーススクロール
  $(".js-scroll").on("click", function() {
    $("body, html").animate({ scrollTop: 0 }, 500);
  });

  //モーダル
  // 使えるようになりたい
  $(".js-modal").on("click", function() {
    $("body").addClass("modal-open");
    $(".modal-content").fadeIn("slow");
    $("#modal-bg").fadeIn("slow");
  });

  $(".js-modal-close").on("click", function() {
    $("body").removeClass("modal-open");
    $(".modal-content").fadeOut(1000);
    $("#modal-bg").fadeOut(1000);
  });

  // タブメニュー
  $(".tab-nav a").on("click", function() {
    if ($(this).hasClass("active")) {
      // hasは持っていたらという意味
      return false;
    }

    console.log(this.hash);

    $(".tab-nav a").removeClass("active");
    // removelassはactiveクラスを外すということ
    $(this).addClass("active");

    $(".tab-content > div").removeClass("active");
    // removeClass初期化している
    $(".tab-content > div")
      .filter(this.hash)
      // filterは検索
      .addClass("active");

    return false;
  });

  // スライダー
  let slideWidth = $(".slide").outerWidth();
  let slideNum = $(".slide").length;
  let slideWrapperWidth = slideWidth * slideNum;
  let currentSlide = 0;
  $(".slide-wrapper").css("width", slideWrapperWidth);

  //次へ
  $(".next-slider").on("click", function() {
    //最後のスライドだった場合
    if (currentSlide >= slideNum - 1) {
      return false;
    }
    currentSlide++;
    slide();
  });

  //前へ
  $(".prev-slider").on("click", function() {
    //最初のスライドだった場合
    if (currentSlide <= 0) {
      return false;
    }
    currentSlide--;
    slide();
  });

  function slide() {
    console.log(currentSlide * -slideWidth);
    $(".slide-wrapper")
      .stop()
      .animate({
        left: currentSlide * -slideWidth
      });
  }
});

