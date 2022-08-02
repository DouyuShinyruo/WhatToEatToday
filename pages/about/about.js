// pages/about/about.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  copyEmail: function(){
    wx.setClipboardData({
      data: 'lizhengxian2005@gmail.com',
      success: function (res) {
        wx.showToast({
          title: '已复制邮箱',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  copy: function (e) {
    var data = ""
    var title = ""
    switch (e.currentTarget.dataset.index){
      case "0":
        data = "miaosputnik@foxmail.com"
        title = "已复制邮箱"
        break;
      case "1":
        data = "https://github.com/nana7mi010"
        title = "已复制Github"
        break;
      case "2":
        data = "https://www.zhihu.com/people/martin-2-48"
        title = "已复制知乎地址"
        break;
    }
    wx.setClipboardData({
      data: data,
      success: function (res) {
        wx.showToast({
          title: title,
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})