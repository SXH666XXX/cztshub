$(function () {
    var reqUrl = 'http://132.232.191.202:8080'; // 二期接口地址
    sessionStorage.setItem('reqUrl', reqUrl)

    $('.select').change( () => {
      let val = $('.select option:selected').text();
      if(val == '关键词') {
        $('#allText').attr('placeholder','请输入关键词')
      } else if(val == '标题'){
        $('#allText').attr('placeholder','请输入标题')
      } else if(val == '案由') {
        $('#allText').attr('placeholder','请输入案由')        
      } else{
        $('#allText').attr('placeholder','请输入编号') 
      }
    })
    $.ajax({
      url: reqUrl+'/wsxx/wsfl',
      success: (res) =>{
       $('#zgfl').html(res['判决书']);
       $('#sfjs').html(res['裁定书']);
       $('#xzfg').html(res['调解书']);
       $('#bmgz').html(res['决定书']);
       $('#dffg').html(res['通知书']);
       $('#qita').html(res['其他']);
      }
    })
    $.ajax({
        url: reqUrl+'/wsxx/ajlx',
        success: (res) =>{
        $('#pcaj').html(res['赔偿案件']);
        $('#zxaj').html(res['执行案件']);
        $('#alk').html(res['刑事案件']);
        $('#qt').html(res['其他']);
        $('#wsk').html(res['民事案件']);
        $('#xzaj').html(res['行政案件']);
    }
    })
 
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
      var iframe ;//高度初始化600，为了14寸笔记本
      iframe =document.getElementById('iframeId');
      iframe.height=document.getElementById("section").offsetHeight;
    })

  })