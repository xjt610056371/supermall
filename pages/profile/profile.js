// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList: [
      {
        num: 0.00,
        unit: '元',
        my: '我的余额'
      },
      {
        num: 0,
        unit: '个',
        my: '我的优惠'
      },
      {
        num: 0,
        unit: '分',
        my: '我的积分'
      }
    ],
    orderList: [
      { icon: '/assets/profile/message.png', info: '我的消息' },
      { icon: '/assets/profile/pointer.png', info: '积分商城' },
      { icon: '/assets/profile/vip.png', info: '会员卡' },
    ],
    serviceList: [
      { icon: '/assets/profile/cart.png', info: '我的购物车' },
      { icon: '/assets/profile/app.png', info: '下载购物APP' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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