//apply.js

var pageObj = {
    data:{
        name: '',
        mobile: '',
        identityNum: '',
        iCode:'',
        toastHidden:true,
        toastMsg:"",
        indicatorDots: false,
        autoplay:true,
        duration:400,
        interval: 3000,
        banner:[{ id:1,img:"../img/head_small.png" },
        { id:2,img:"../img/head_dai.jpg" },
        { id:3,img:"../img/head_small.png" },]
    },
    submitInfo:function(e){
        console.log(this.data);
        if(testICode(this.data.iCode) && testName(this.data.name) && testIdentityNum(this.data.identityNum) && testMobileNum(this.data.mobile)){
            reqSubmitInfo(this.data,res =>{
                if(typeof res === "Object" && res.code ===120){
                    //do something
                    console.log(res.message);
                }else if(res.code > 125){
                    showMsg("error",res.message);
                }else{
                    showMsg("error","当前网络错误");
                }
            });
        }
    },

    outInputName:function(e){
        testName(e.detail.value);
      
    },
    updateInputName:function(e){
        this.setData({
            name : e.detail.value
        });
    },

    outIdentityNum:function(e){
        testIdentityNum(e.detail.value);   
    },
    updateIdentityNum:function(e){
        this.setData({
            identityNum:e.detail.value
        })
    },

    outMobileNum:function(e){
        testMobileNum(e.detail.value)
    },
    updateMobileNum:function(e){
        this.setData({
            mobile:e.detail.value
        })
    },
    getICode:function(e){
        console.log(this.data);
        console.log(testName(this.data.name) && testIdentityNum(this.data.identityNum) && testMobileNum(this.data.mobile));
        if(testName(this.data.name) && testIdentityNum(this.data.identityNum) && testMobileNum(this.data.mobile)){
            reqICode(this.data.mobile,res=>{
                console.log(this.data.mobile);
                if(typeof res === "Object" && res.code>115){
                    showMsg("error",res.message);
                }else if(res.code === 110){
                    showMsg("success","验证码以发送，请注意查收");
                }else{
                    showMsg("error","当前网络错误");
                }
            })
        }
    },
    updateICode:function(e){
        this.setData({
            iCode:e.detail.value
        });
    },
    outICode:function(e){
        testICode(this.data.iCode);
    },
    toastChange:function(e){
    }
}

Page(pageObj);

function testName(name){
    return /^[\u4e00-\u9fa5]{2,5}$/.test(name)?true:(showMsg("error","this is error"),false);
}

function testIdentityNum(iNum){
    if (!(/^[1-9]\d{5}[1|2]\d{3}((0[1-9])|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/.test(iNum))) {
            showMsg("error","请输入正确的身份证号");
            return false;
        }
    let idWgt = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];
    let s = 0;
        for (let i = 0; i < 18; i++)
            s += (iNum[i] === 'X' ? 10 : iNum[i]) * idWgt[i];
    if (s % 11 != 1) {
        showMsg("error","请输入合法的身份证号");
        return false ;
    }

    return fromNow(iNum.substr(6,8))?true:(showMsg("error","暂时只接受18~50周岁的人申请"),false);   
}

function testMobileNum(mobile){
   return  /^1(3\d|4[57]|5[0-35-9]|7[013678]|8\d)\d{8}$/.test(mobile)?true:(showMsg("error","请输入正确的手机号"),false);
}

function testICode(code){
    return /^\d{4}$/.test(code)?true:(showMsg("error","请输入合法的验证码"),false);
}

function fromNow(date){
    let year = date.substr(0,4);
    let now = new Date();
    let yearNow = now.getFullYear();
    if (yearNow - year <50 && yearNow - year >18 ) {
        return true;
    }else if (yearNow - year ==18 && ((now.getMonth()+1) - date.substr(4,2))>0) {
        return true;
    }else if(((now.getMonth()+1) - date.substr(4,2)) == 0 && now.getDate() - date.substr(6,2) >= 0){
        return true;
    }
    return false;
}

function showMsg(state,msg){
   console.log("this is "+ state + "msg:"+ msg);
   

}


function reqICode(mobile,callback){
    // wx.request({
    //     url: '',//接口不方便//
    //     header:{
    //         "Content-Type":"application/json"
    //     },
    //     success: function(res) {
    //         callback(res);
    //     },
    //     fail:function(){
    //         showMsg("error","当前网络错误");
    //     }
    // });
    callback({code:110,message:"ok"});//模拟返回
}

function reqSubmitInfo(data,callback){ 
    // wx.request({
    //     url: '',//接口不方便//
    //     data: data,
    //     header: {
    //         'Content-Type': 'application/json'
    //     },
    //     success: function(res) {
    //         callback(res);
    //     },
    //     fail:function(error){
    //         showMsg("error","当前网络错误");
    //     }
    // });
    callback({code:122,message:"数据库查询出错"});//模拟返回，服务器错误
}
