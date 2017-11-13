//logs.js
const util = require('../../utils/util.js')

Page({
    onTapJump:function(event){
        wx.redirectTo({
          url: 'pages/jingji/jingji',
          success:function(){
              console.log("jump success")
          },
          fail:function(){
              console.log("jump failed")
          },
          complete: function () {
            console.log("jump complete")
          }
        });
    }
})
