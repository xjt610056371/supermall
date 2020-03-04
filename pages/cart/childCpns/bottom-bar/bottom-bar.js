// pages/cart/childCpns/bottom-bar/bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Object,
      value: {}
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
      this.triggerEvent('clickSelectAll', e.currentTarget.dataset.checkclick)
    }
  }
})
