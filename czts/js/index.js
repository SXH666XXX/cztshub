$(function () {
  var reqUrl = 'http://132.232.191.202:8080'; // 二期接口地址
  sessionStorage.setItem('reqUrl', reqUrl)

  $('.select').change(() => {
    let val = $('.select option:selected').text();
    if (val == '关键词') {
      $('#allText').attr('placeholder', '请输入关键词')
    } else if (val == '标题') {
      $('#allText').attr('placeholder', '请输入标题')
    } else if (val == '案由') {
      $('#allText').attr('placeholder', '请输入案由')
    } else {
      $('#allText').attr('placeholder', '请输入编号')
    }
  })
  $.ajax({
    url: reqUrl + '/wsxx/wsfl',
    success: (res) => {
      $('#zgfl').html(res['判决书']);
      $('#sfjs').html(res['裁定书']);
      $('#xzfg').html(res['调解书']);
      $('#bmgz').html(res['决定书']);
      $('#dffg').html(res['通知书']);
      $('#qita').html(res['其他']);
    }
  })
  $.ajax({
    url: reqUrl + '/wsxx/ajlx',
    success: (res) => {
      $('#pcaj').html(res['赔偿案件']);
      $('#zxaj').html(res['执行案件']);
      $('#alk').html(res['刑事案件']);
      $('#qt').html(res['其他']);
      $('#wsk').html(res['民事案件']);
      $('#xzaj').html(res['行政案件']);
    }
  })




  $('#selectEd').change(function () { //判断不同的筛选状态
    var selectVal = $(this).val();
    if (selectVal == 0) {
      searchGjc()
    } else if (selectVal == 1) {
      searchWsbt()
    } else if (selectVal == 2) {
      searchWsay()
    } else {
      searchAh()
    }
  })
  
  function searchGjc() {    
    $('.searchImg').click(() => {
      var ul = $("<ul id='ulis' class='uls'>11</ul>");
      var demo3 = $('<div id="demo3"></div>')
      $("#section").html(ul);
      $('#section').append(demo3)
      var reqUrl = sessionStorage.getItem("reqUrl");
      var inputVal = $('#allText').val();
      $.ajax({
        type: "post",
        url: reqUrl + "/wsxx/list?gjc=" + inputVal,
        data: JSON.stringify({ "pageNum": 1, "pageSize": 5 }),
        contentType: "application/json",
        success: (res) => {
          var html = '';
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
          $('#ulis').html(html)

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
    })
  }
  function searchWsbt() {    
    $('.searchImg').click(() => {
      var ul = $("<ul id='ulis' class='uls'>11</ul>");
      var demo3 = $('<div id="demo3"></div>')
      $("#section").html(ul);
      $('#section').append(demo3)
      var reqUrl = sessionStorage.getItem("reqUrl");
      var inputVal = $('#allText').val();
      $.ajax({
        type: "post",
        url: reqUrl + "/wsxx/list?wsBt=" + inputVal,
        data: JSON.stringify({ "pageNum": 1, "pageSize": 5 }),
        contentType: "application/json",
        success: (res) => {
          var html = '';
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
          $('#ulis').html(html)

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
    })
  }
  function searchWsay() {    
    $('.searchImg').click(() => {
      var ul = $("<ul id='ulis' class='uls'>11</ul>");
      var demo3 = $('<div id="demo3"></div>')
      $("#section").html(ul);
      $('#section').append(demo3)
      var reqUrl = sessionStorage.getItem("reqUrl");
      var inputVal = $('#allText').val();
      $.ajax({
        type: "post",
        url: reqUrl + "/wsxx/list?wsAy=" + inputVal,
        data: JSON.stringify({ "pageNum": 1, "pageSize": 5 }),
        contentType: "application/json",
        success: (res) => {
          var html = '';
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
          $('#ulis').html(html)

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
    })
  }
  function searchAh() {    
    $('.searchImg').click(() => {
      var ul = $("<ul id='ulis' class='uls'>11</ul>");
      var demo3 = $('<div id="demo3"></div>')
      $("#section").html(ul);
      $('#section').append(demo3)
      var reqUrl = sessionStorage.getItem("reqUrl");
      var inputVal = $('#allText').val();
      $.ajax({
        type: "post",
        url: reqUrl + "/wsxx/list?ah=" + inputVal,
        data: JSON.stringify({ "pageNum": 1, "pageSize": 5 }),
        contentType: "application/json",
        success: (res) => {
          var html = '';
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
          $('#ulis').html(html)

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
    })
  }





  var dataHrefTxt = 'sentence.html';
  $('#section').html('<iframe src="' + dataHrefTxt + '" frameborder="0" name="skip" id="iframeId" scrolling="no" frameborder="no" width="100%" height="100%"  ></iframe>'); // 进入页面默认展示
  /* 左侧导航(a标签点击之后改变自身样式) */
  $('#sidebar li a').on('click', function () {
    type = $(this).attr('data-type');
    var thatTxt = $(this).attr('data-txt');
    sidebarLeftTxt = thatTxt;
    dataHrefTxt = $(this).attr('data-href');
    $('#section').html('<iframe  src="' + dataHrefTxt + '" data-leftNum="1" frameborder="0" name="skip" id="iframeId" scrolling="no" frameborder="no" width="100%" height="100%"></iframe>');
  });

  $(function setIframeHeight() {
    var iframe;//高度初始化600，为了14寸笔记本
    iframe = document.getElementById('iframeId');
    iframe.height = document.getElementById("section").offsetHeight;
  })

})