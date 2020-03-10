// pages/cart/cart.js
const app = getApp()

Page({
  data: {
    cartList: [],
    bottomBar: {
      isSelectAll: true,
      totalPrice: 0,
      totalCounter: 0
    },
    number: 0
  },
  
  onShow() {
    // 1.第一次加载数据
    this.setData({
      cartList: app.globalData.cartList
    })

    // 2.设置回调
    app.addCartCallback = () => {
      this.setData({
        cartList: app.globalData.cartList
      })
    }

    // 3.获取总价格和总数量
    this.getTotal()
  },
  checkClick(e) {

    const index = e.detail;
    const cartList = this.data.cartList
    
    // 将对应index的元素isCheck取反
    cartList[index].isCheck = !cartList[index].isCheck

    // 检查是否全选
    const isSelectAll = this.checkSelectAll()
    if (isSelectAll != this.data.bottomBar.isSelectAll) {
      this.setData({
        cartList,
        'bottomBar.isSelectAll': isSelectAll
      })
    } else {
      this.setData({
        cartList
      })
    }

    // 重新获取总价格和总数量
    this.getTotal()
  },
  getTotal() {

    const cartList = this.data.cartList 
    var totalPrice = 0
    var totalCounter = 0
    for(var item of cartList) {
      if(item.isCheck) {
        totalPrice += item.price * item.count
        totalCounter += item.count
      }
    }

    this.setData({
      'bottomBar.totalPrice': totalPrice.toFixed(2),
      'bottomBar.totalCounter': totalCounter
    })
  },
  checkSelectAll() {
    const cartList = this.data.cartList
    for (var item of cartList) {
      // 任何一个没选，返回false
      if(!item.isCheck) 
        return false
    }
    return true
  },
  clickSelectAll(e) {
    const isSelectAll = e.detail;
    
    const cartList = this.data.cartList

    // 设置为全选或者全未选
    for (let item of cartList) {
      item.isCheck = !isSelectAll
    }
    this.setData({
      cartList,
      'bottomBar.isSelectAll': !isSelectAll
    })

    // 重新获取总价格和总数量
    this.getTotal()
  }
})