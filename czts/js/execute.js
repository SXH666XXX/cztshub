$(function() {
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo3'
            ,count: 33
            ,limit: 3
            ,first: '首页'
            ,last: '尾页'
            ,prev: '<em>←</em>'
            ,next: '<em>→</em>'
        });
    });
    // 点击列表进入详情
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