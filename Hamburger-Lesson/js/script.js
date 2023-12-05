$(function() {
    $('.menu-trigger').on('click', function(event) { //ハンバーガーを押した時
      $(this).toggleClass('active');   //activeがある場合はけしてないといれる
      $('#sp-menu').fadeToggle();     //activeがある場合はtrue trueだったらfadeToggleが動くつまり黒くなる
      event.preventDefault();   // デフォに戻す
    });
  });