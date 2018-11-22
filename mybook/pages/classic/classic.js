import {HTTP} from '../../util/http.js'

let http = new HTTP()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    http.request({
      url:'classic/latest',
      success:(res) =>{
        console.log(res)
      }
    })

    // wx.request({
    //   url:'http://bl.7yue.pro/v1/classic/latest',
    //   header:{
    //     appKey: "AbhC31IG7ruCDp57"
    //   },
    //   success:(ret)=>{
    //     console.log(this.data.test)

    //     console.log(ret);
    //   }
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let promise = new Promise((resolve, reject) =>{
      wx.request({
        url: 'http://bl.7yue.pro/v1/classic/latest',
        header: {
          appKey: "AbhC31IG7ruCDp57"
        },
        success: (ret) => {
          resolve(ret);
        }
      })
    })

    promise.then((res)=>{
      console.log(res)
    })
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