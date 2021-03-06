$(function() {
    var reqUrl = sessionStorage.getItem("reqUrl");
    $('#fycj').change(() => { //法院层级筛选
        var val = $('#fycj').val();
        if (val != '法院层级') {
          $.ajax({
            type: 'post',
            url: reqUrl + '/wsxx/list?fycj='+val,
            contentType: "application/json",
            data: JSON.stringify({ "pageNum": 1, "pageSize": 5}),
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
                  '<a class="downTxt">' + '<img src="image/downImg.png" alt="下载icon">下载 </a>' +
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
                        url: reqUrl + '/wsxx/list',
                        data: JSON.stringify({ "pageNum": obj.curr, "pageSize": 5 }),
                        contentType: "application/json",
                        type: "post",
                        success: function (res) {
                          html = '';
                          console.log(res)
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
                              '<a class="downTxt">' + '<img src="image/downImg.png" alt="下载icon">下载 </a>' +
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
          })
        }
      })
})