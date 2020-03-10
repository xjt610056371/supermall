// components/swiper/swiper.js
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
    // height: 160
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // imgLoad(e) {
    //   //获取当前屏幕的宽度
    //   var winWid = wx.getSystemInfoSync().windowWidth;
    //   //获取图片高度、宽度
    //   var imgh = e.detail.height;　　　　　　　　　　　　　　　　
    //   var imgw = e.detail.width;
    //   //修改轮播图高度
    //   var swiperH = winWid * imgh / imgw 　　　　　　　　　　
    //   this.setData({
    //     height: swiperH　　　　　　　　
    //   })
    // }
  }
})
