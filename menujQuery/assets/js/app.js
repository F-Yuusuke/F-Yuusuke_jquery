// ボタンの形、色変更
$(function () {
  $('#js-click-btn').on('click', function() {
    $(this).addClass('large-btn');
  });

  // ボタンの透明度変更
  $('#js-hover-btn')
  .on('mouseover', function() {
    $(this).addClass('opacity');
  })
  .on('mouseleave',function() {
    $(this).removeClass('opacity');
  });

  // 要素の表示の切り替え
$('#js-show-btn').on('click',function() {
  $('#js-target-element').fadeIn(1000);
});
$('#js-hide-btn').on('click',function() {
  $('#js-target-element').fadeOut(1000);
});

// 要素の追加  
$('#js-add-btn').on('click',function() {
  insertAfter = $('<li>')
  .addClass('btn')
  .text('頼む');

  $(this).before(insertAfter);
  $(this).after(insertAfter);
})

// 要素が出てくるやつtoggle

$('.js-toggle').on('click',function() {
  $(this).toggleClass('on');
  $(this)
    // 色の変え方をしる
    .siblings()
    .slideToggle();
    
});


// ハンバーガーメニュー
$('js-humburger').on('click',function() {
  $(this).toggleClass('on');
});



// メニュー練習
$('.tab-nav a').on('click',function() {
  if($(this).hasClass('active')) {
    return false;
  }

  $('.tab-nav a').removeClass('active');
  $(this).addClass('active');

  $('.tab-content > div').removeClass('active');
  $('.tab-content > div')
  .filter(this.hash)
  .addClass('active');

  return false;
});







});


