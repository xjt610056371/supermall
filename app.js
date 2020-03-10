//app.js
App({
  onLaunch() {
    const token = wx.getStorageSync('token')
    // 判断本地是否有token
    if(token && token.length !== 0) {
      // 检查token是否过期
      if(this.check_token(token)) {
        this.login()
      } else {
        this.globalData.token = token
      }
    } 
    // 没有，直接进行登录
    else {
      this.login()
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  check_token(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: res => {
        if(res.statusCode == 200) {
          return false
        } else {
          return true
        }
      }
    })
  },
  login() {
    // 发起登录请求
    wx.login({
      success: res => {
        const code = res.code
        // 将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: res => {
            this.globalData.token = res.data.token
            console.log(res)
            // token保存到本地中
            wx.setStorage({
              key: 'token',
              data: res.data.token,
            })
          }
        })
      }
    })
  },
  addToCart(obj) {
    // 1.判断是否已经添加进来
    const oldInfo = this.globalData.cartList.find((item) => item.iid === obj.iid)
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      obj.count = 1
      obj.checked = true
      this.globalData.cartList.push(obj)
    }
    

    // 2.购物车回调
    if (this.addCartCallback) {
      this.addCartCallback()
    }
  },
  globalData: {
    cartList: [],
    token: '',
    userInfo: {}
  }
})