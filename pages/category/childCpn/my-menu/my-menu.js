// pages/category/childCpn/my-menu/my-menu.js
Component({
  /**
   * 组件的属性列表
   */
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
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(event) {
      // 改变当前index
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index,
      })

      // 将当前index发送出去
      this.triggerEvent('menuClick', index)
    }
  }
})
