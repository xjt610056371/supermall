// pages/cart/childCpns/cart-list-item/cart-list-item.js
const app = getApp()

Component({
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCheckClick(e) {
      // 将发生点击的商品index发生出去
      this.triggerEvent('checkClick', e.currentTarget.dataset.index)
    }
  }
})
