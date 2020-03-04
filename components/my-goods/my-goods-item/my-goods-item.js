// components/my-goods/my-goods-item/my-goods-item.js
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
    // 0:未收藏
    // 1:已收藏
    isActive: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      this.setData({
        isActive: !this.data.isActive
      })
    },
    itemClick() {
      // 1.获取iid
      const iid = this.data.info.iid || this.data.info.item_id;
      // 2.跳转到对应的路径
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid,
      })
      // 1kkf1di
    }
  }
})
