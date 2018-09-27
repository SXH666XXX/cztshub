$(function () {
    var reqUrl = sessionStorage.getItem("reqUrl");
    $.ajax({
        type: "post",
        url: reqUrl + "/wsxx/list?ajlx=民事案件",
        data: JSON.stringify({ "pageNum": 1, "pageSize": 5 }),
        contentType: "application/json",
        success: function (res) {
            console.log(res)
            var data = res,
                html = '';
            for (var i = 0; i < res.list.length; i++) {
                html += '<li id="lists" data-detailid=' + res.list[i].wsId + '>' +
                    '<div class="lis" id="list1" data-txt="zhal" data-type="zhal" data-href="documentDetail.html" target="skip">' +
                    '<input type="text" id="nones" class="nones" value =' + res.list[i].wsId + ' >' +
                    '<button class="labelCriminal">' + res.list[i].ajlx + '</button>' +
                    '<div class="column">' +
                    '<h6 class="titName">' + res.list[i].wsBt + '</h6>' +
                    '</div>' +
                    '<div class="column">' +
                    '<p>' + res.list[i].ah + '<span>' + res.list[i].jarq + '</span>' + '</p>' +
                    '</div>' +
                    '<div class="columns">' +
                    '<p class="msg">' +
                    '<b>【裁判理由】 </b>' + res.list[i].wsnr +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="columnBtn">' +
                    '<span class="download">' + '<img src="image/downImg.png" alt="下载icon">下载 </span>' +
                    '<span class="tjws" data-type="zhal" data-href="recommend.html" target="skip">' + '<img src="image/moreImg.png" alt="icon损坏"> 推荐文书 </span>' +
                    '</div>' +
                    '</li>'
            }
            $('#uls').html(html)

            layui.use(['laypage', 'layer'], function () {
                var laypage = layui.laypage,
                    layer = layui.layer;
                //自定义首页、尾页、上一页、下一页文本
                laypage.render({
                    elem: 'demo3',
                    count: res.total,   //总条数
                    limit: 5,    //一页显示多少条
                    first: '首页',
                    last: '尾页',
                    layout: ['count', 'prev', 'page', 'next', 'skip'],
                    prev: '<em>←</em>',
                    next: '<em>→</em>',
                    jump: function (obj, first) {
                        if (!first) {
                            console.log(obj);
                            $.ajax({
                                url: reqUrl + '/wsxx/list?ajlx=民事案件',
                                data: JSON.stringify({ "pageNum": obj.curr, "pageSize": 5 }),
                                contentType: "application/json",
                                type: "post",
                                success: function (res) {
                                    html = '';
                                    for (var i = 0; i < res.list.length; i++) {
                                        html += '<li id="lists" data-detailid=' + res.list[i].wsId + '>' +
                                            '<div class="lis" id="list1" data-txt="zhal" data-type="zhal" data-href="documentDetail.html" target="skip">' +
                                            '<input type="text" id="nones" class="nones" value =' + res.list[i].wsId + ' >' +
                                            '<button class="labelCriminal">' + res.list[i].ajlx + '</button>' +
                                            '<div class="column">' +
                                            '<h6 class="titName">' + res.list[i].wsBt + '</h6>' +
                                            '</div>' +
                                            '<div class="column">' +
                                            '<p>' + res.list[i].ah + '<span>' + res.list[i].jarq + '</span>' + '</p>' +
                                            '</div>' +
                                            '<div class="columns">' +
                                            '<p class="msg">' +
                                            '<b>【裁判理由】 </b>' + res.list[i].wsnr +
                                            '</p>' +
                                            '</div>' +
                                            '</div>' +
                                            '<div class="columnBtn">' +
                                            '<span class="download">' + '<img src="image/downImg.png" alt="下载icon">下载 </span>' +
                                            '<span class="tjws" data-type="zhal" data-href="recommend.html" target="skip">' + '<img src="image/moreImg.png" alt="icon损坏"> 推荐文书 </span>' +
                                            '</div>' +
                                            '</li>'
                                    }
                                    $('#uls').html(html)
                                }
                            })
                        }
                    }
                });
            });

        }
    });
    // 点击列表进入详情
    $('.uls').on('click', '.lis', function () {
        type = $(this).attr('data-type');
        var thatTxt = $(this).attr('data-txt');
        sidebarLeftTxt = thatTxt;
        dataHrefTxt = $(this).attr('data-href');
        $('#mains').html('<iframe  src="' + dataHrefTxt + '" data-leftNum="1" frameborder="0" name="skip" id="iframeId   scrolling="no" frameborder="no" width="100%" height="100%" "></iframe>');
        var val = $(this).find('#nones').val()
        sessionStorage.setItem('valid', val)
        // alert(val) //查看跳转id
    });
    // 点击进入推荐列表
    $('.tjws').on('click', function () {
        type = $(this).attr('data-type');
        var thatTxt = $(this).attr('data-txt');
        sidebarLeftTxt = thatTxt;
        dataHrefTxt = $(this).attr('data-href');
        $('#mains').html('<iframe  src="' + dataHrefTxt + '" data-leftNum="1" frameborder="0" name="skip" id="iframeId"  scrolling="no" frameborder="no" width="100%" height="100%"></iframe>');
    });
    $('#uls').on('click', 'li a.downTxt', function () {
        var id = $(this).parent().parent().attr('data-detailid');
        console.log(id)
        console.log($(this).parent().parent())
        window.open(reqUrl + '/wsxx/downloadWs?wsId=' + id);
    });
})