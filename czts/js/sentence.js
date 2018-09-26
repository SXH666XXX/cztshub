$(function() {
    let iframe ;
    $('.lis').on('click', function () { 
        type = $(this).attr('data-type');
        var thatTxt = $(this).attr('data-txt');    
        sidebarLeftTxt = thatTxt;
        dataHrefTxt = $(this).attr('data-href'); 
        $('#mains').html('<iframe  src="' + dataHrefTxt + '" data-leftNum="1" frameborder="0" name="skip" id="iframeId"  scrolling="no" frameborder="no" width="100%" height="100%"></iframe>');
      });
      // 点击进入推荐列表
      $('.tjws').on('click', function () {
        type = $(this).attr('data-type');
        var thatTxt = $(this).attr('data-txt');    
        sidebarLeftTxt = thatTxt;
        dataHrefTxt = $(this).attr('data-href');
        $('#mains').html('<iframe  src="' + dataHrefTxt + '" data-leftNum="1" frameborder="0" name="skip" id="iframeId"  scrolling="no" frameborder="no" width="100%" height="100%"></iframe>');
     });
})