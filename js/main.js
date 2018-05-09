$(function () {
    //加载音乐


    $('#fpMusic').click(function(){
        if($(this).hasClass('stopped')){
            $(this).removeClass('stopped');
            $('#fpMusicAudio').get(0).play();
        }
        else{
            $(this).addClass('stopped');
            $('#fpMusicAudio').get(0).pause();
        }
    })
    function checkname(v) {
        let rx = /[a-z\d\.]/i, rxcn = /[\u4e00-\u9fa5]/, num = 0, chr;
        for (let i = 0, j = v.length; i < j; i++) {
            chr = v.charAt(i);/////////
            if (rx.test(chr)) num += 1;
            else if (rxcn.test(chr)) num += 2;
            else return false;
        }
        if (num < 1 || num > 8) return false;/////////
        return true;
    }
    function checkKeShi(v) {
        let rx = /[a-z\d\.]/i, rxcn = /[\u4e00-\u9fa5]/, num = 0, chr;
        for (let i = 0, j = v.length; i < j; i++) {
            chr = v.charAt(i);/////////
            if (rx.test(chr)) num += 1;
            else if (rxcn.test(chr)) num += 2;
            else return false;
        }
        if (num < 1) return false;/////////
        return true;
    }

    $('.baoming').click(function () {
        let phonereg = /^(((13[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
   if(!phonereg.test($("#phone").val())){
            alert('请输入有效的手机号码!');
            return false;
        }else if(!checkname($('#name').val())){
       alert('姓名不符合规范');
        return false;
   }else if(!checkKeShi($("#keshi").val())){
       alert('科室不符合规范');
       return false;
   }else if(!checkKeShi($("#yiyuan").val())){
       alert('医院不符合规范');
       return false;
   }else{
       if(localStorage.getItem('Status')){
           alert('请勿重复提交信息');
       }else{
           $.ajax({
               url:'/users/zuobofuform',
               type:'post',
               data:{name:$('#name').val(),phone:$('#phone').val(),keshi:$('#keshi').val(),yiyuan:$('#yiyuan').val()},
               success:function (data) {
                   if(data){
                       alert('提交成功');
                       localStorage.setItem('Status','1');
                   }

               },
               error:function () {

               }
           })
       }

   }

    })

})
