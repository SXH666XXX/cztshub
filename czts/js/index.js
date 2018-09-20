$(function () {
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