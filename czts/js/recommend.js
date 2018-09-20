$(function () {
    let iframe;
    layui.use(['laypage', 'layer'], function () {
        var laypage = layui.laypage
            , layer = layui.layer;
        //自定义首页、尾页、上一页、下一页文本
        laypage.render({
            elem: 'demo3'
            , count: 33
            , limit: 3
            , first: '首页'
            , last: '尾页'
            , prev: '<em>←</em>'
            , next: '<em>→</em>'
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


    var inps = document.getElementsByTagName('input');
    check();
    inps[0].onclick = function () {
        check(this);
    }
    function check(par) {
        for (var i = 1; i < inps.length; i++) {
            if (par) {
                inps[i].checked = par.checked;
            }
            inps[i].onclick = function () {
                var flag = true;
                for (var j = 1; j < inps.length; j++) {
                    if (!inps[j].checked) {
                        flag = false;
                    }
                }
                inps[0].checked = flag;
            }
        }
    }
})