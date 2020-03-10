const app = getApp()
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
    ],
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  },
  getUserInfo(e) {
    app.globalData.userInfo = e.detail
    this.setData({
      userInfo: e.detail
    })
  }
})