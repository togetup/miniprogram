// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'普惠大众',
    userInfo:{},
    isShow:true
  },

  /**
   * 【开启小程序之旅】点击处理函数
   */
  handleClick(){
    // 点击跳转到 list 页面
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 做一些初始化工作，发送请求，开启定时器

    this.getUserInfo();
  },

  /**
   * 获取用户信息
   */
  getUserInfo(){
    // 判断用户是否已授权
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          // 用户已授权
          this.setData({
            isShow: false
          })
        } else {
          // 用户未授权
          this.setData({
            isShow: true
          })
        }
      }
    })

    // 获取用户登录信息
    wx.getUserInfo({
      success: (data) => {
        // 更新 data 中的 userInfo
        this.setData({
          userInfo: data.userInfo
        })
      },
      fail: () => {
        console.log('获取用户信息失败');
      }
    })
  },

  /**
   * 处理用户登录
   */
  handleGetUserInfo:function(data){
    // 判断用户点击的是否是允许
    if(data.detail.rawData){
      // 用户点击的是允许
      this.getUserInfo();
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})