//公共方法
var Vue = require('vue');
function requestAjax(url,param,callBack,failBack=null) {
    // let id = sessionStorage.getItem('sessionId'),
    //     api = `${url}?sessionId=${id}`;
    Vue.default.http.post(url, param, {emulateJSON: true}).then(res => {
        // console.log(res.data,'返回值')
        let status = res.data.status;
        if (status == 200) {
            callBack(res.data)
        }
        // else if(status == 401){
        //     // callBack(res.data)
        //    // this.$router.push('/login')
        // }
        else{
          console.log(res,'error ajax')
          failBack(res.data)
        }
    }, res => {
        if(failBack){
            failBack(res.data)
        }
    });
}
function failBack(res){
    consoel.log(res);
}

function uploadFile(url,param,callBack,failBack=null) {
    let id = sessionStorage.getItem('sessionId'),
        api = `${url}?sessionId=${id}`;
    Vue.default.http.post(api, param, {headers:{"Content-Type":"multipart/form-data"},emulateJSON:true}).then(res => {
        let status = res.data.status;
        if(status == 200){
            callBack(res.data)
        }else{
          failBack(res,'error ajax')
        }
    }, res => {
        if(failBack){
            failBack(res.data)
        }
    });
}

function dateFormate(num,type='date'){
    var d=new Date(num);
    var year=d.getFullYear();
    var day=d.getDate();
    var month=+d.getMonth()+1;
    var hour=d.getHours();
    var minute=d.getMinutes();
    var second=d.getSeconds();
    console.log(type)
    if(type=='date'){
        var f=year+"-"+formate(month)+"-"+formate(day)+" "+formate(hour)+":"+formate(minute)+":"+formate(second);
    }else if(type=='birth'){
        var f=year+"/"+month+"/"+day
    }else if(type=='time'){
        var f=formate(hour)+":"+formate(minute)
    }

    function formate(d){
        return d>9?d:'0'+d;
    }
    return f;
}

//设置cookie1：
function setCookie(name, value){
    let Days = 1,
    exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookie：
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
}

//上拉加载
function refresh(callback,t) {
    window.addEventListener("scroll",function(){
    //   var winHeight = document.documentElement.clientHeight;
    //   var docHeight = document.body.clientHeight;
    //   var docOffTop = document.body.scrollTop;
    //   if(docOffTop == docHeight-winHeight){
    //     callback();
    //   }
        if (document.body.scrollHeight - (window.scrollY + document.body.clientHeight) < 100) {
            callback();
        }
    })
  }

module.exports = {
  requestAjax,
  uploadFile,
  dateFormate,
  setCookie,
  getCookie,
  refresh,
}
