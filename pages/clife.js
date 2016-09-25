
Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
      
    var context = wx.createContext();
    strokeContext(context);
   
    console.log(context);

    //调用wx.drawCanvas，通过canvasId指定在哪张画布上绘制，通过actions指定绘制行为
    wx.drawCanvas({
      canvasId: 'scoreCanvas',
      actions: context.getActions() //获取绘图动作数组
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
});


function strokeContext(context){//这里没有对仪表盘组件没有进行封装，canvas中的居中有问题
    context.beginPath()
    context.setStrokeStyle("#ffffff");
    context.setLineWidth(4)
    context.arc(115,150,110,0.9*Math.PI,1.2*Math.PI);
    context.stroke();
    
    context.setStrokeStyle("#ffffff")
    context.setLineWidth(10)
    context.beginPath()
    context.arc(115,150,90,0.9*Math.PI,1.2*Math.PI);
    context.stroke();

    context.setFontSize(20)
    context.setFillStyle("#ffffff");
    context.beginPath()
    context.fillText("信用极好", 75, 180)
    context.stroke()

    context.setFontSize(50)
    context.setFillStyle("#ffffff");
    context.beginPath()
    context.fillText("540", 80, 140)
    context.stroke()

    context.beginPath();
    context.setLineWidth(1);
    context.setFillStyle("#ffffff");
    var degree = 120;
    var x = 115 - Math.cos(degree*Math.PI/180) * 110;
    var y = 150 - Math.sin(degree*Math.PI/180) * 110;
    context.arc(x,y,5,0,2*Math.PI);
    context.fill();
    context.stroke();
}
