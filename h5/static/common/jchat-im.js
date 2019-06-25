export default {
    init({res,success,fail}={}){
        JIM.init({
            "appkey" : res.appkey,
            "random_str" : res.random_str,
            "signature" :res.signature,
            "timestamp" : res.timestamp,
            "flag" : 1
        }).onSuccess((data)=>{
            JIM.login({
                'username' : sessionStorage.getItem('userId'),
                'password' : sessionStorage.getItem('imPwd'),
                'is_md5':true
            }).onSuccess((data)=> {     
                console.log('success:' + JSON.stringify(data));
                success&&success()
             }).onFail((data) =>{
                fail&&fail(data)
                console.log('error:' + JSON.stringify(data));
            }).onTimeout((data)=> {
               console.log('timeout:' + JSON.stringify(data))
           });
        }).onFail(function(data) {
            console.log('onFail:'+JSON.stringify(data));
        });
    }
}

