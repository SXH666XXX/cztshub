$(function() {
    let iframe ; 
    
    var tab_content = $(".tab_content"); //table切换
    $(".tab_menu").click(function () {
        var index = $(this).data("index");
        $(this).siblings().removeClass("tab_menu_active");
        $(this).addClass("tab_menu_active");
        $(tab_content).removeClass("tab_content_active");
        $(tab_content[index]).addClass("tab_content_active");
    });


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
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo4'
            ,count: 33
            ,limit: 3
            ,first: '首页'
            ,last: '尾页'
            ,prev: '<em>←</em>'
            ,next: '<em>→</em>'
        });
    });
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo5'
            ,count: 33
            ,limit: 3
            ,first: '首页'
            ,last: '尾页'
            ,prev: '<em>←</em>'
            ,next: '<em>→</em>'
        });
    });
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo6'
            ,count: 33
            ,limit: 3
            ,first: '首页'
            ,last: '尾页'
            ,prev: '<em>←</em>'
            ,next: '<em>→</em>'
        });
    });
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo7'
            ,count: 33
            ,limit: 3
            ,first: '首页'
            ,last: '尾页'
            ,prev: '<em>←</em>'
            ,next: '<em>→</em>'
        });
    });

    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo8'
            ,count: 33
            ,limit: 3
            ,first: '首页'
            ,last: '尾页'
            ,prev: '<em>←</em>'
            ,next: '<em>→</em>'
        });
    });

    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo9'
            ,count: 33
            ,limit: 3
            ,first: '首页'
            ,last: '尾页'
            ,prev: '<em>←</em>'
            ,next: '<em>→</em>'
        });
    });
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo10'
            ,count: 33
            ,limit: 3
            ,first: '首页'
            ,last: '尾页'
            ,prev: '<em>←</em>'
            ,next: '<em>→</em>'
        });
    });
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo11'
            ,count: 33
            ,limit: 3
            ,first: '首页'
            ,last: '尾页'
            ,prev: '<em>←</em>'
            ,next: '<em>→</em>'
        });
    });
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo12'
            ,count: 33
            ,limit: 3
            ,first: '首页'
            ,last: '尾页'
            ,prev: '<em>←</em>'
            ,next: '<em>→</em>'
        });
    });
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
        ,layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo13'
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