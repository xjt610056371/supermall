// pages/home/home.js
import { getMultiData, getGoodsData} from '../../service/home.js'

Page({
  data: {
    bannerList: [],
    recommendList: [],
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] }
    },
    types: ['pop', 'new', 'sell'],
    currenType: 'pop',
    isActive: false
  },
  onLoad: function(options) {
    // 1.请求轮播图以及推荐数据
    this._getMultiData()

    // 2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  _getMultiData() {
    getMultiData().then(res => {
      const bannerList = res.data.data.banner.list
      const recommendList = res.data.data.recommend.list

      // 将数据保存到data中
      this.setData({
        bannerList,
        recommendList
      })
    }).catch(err => err)
  },
  _getGoodsData(type) {
    // 1.获取页码
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
    const page = this.data.goods[type].page + 1;

    // 2.发送网络请求
    getGoodsData(type, page).then(res => {
      wx.hideLoading()
      // 2.1.取出数据
      const list = res.data.data.list;

      // 2.2.将数据设置到对应type的list中
      const oldList = this.data.goods[type].list;
      oldList.push(...list)

      // 2.3.将数据设置到data中的goods中
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    }).catch(err => err)
  },
  tabClick(event) {
    // 将所选中的type保存下来
    var type = this.data.types[event.detail]
    this.setData({
      currenType: type
    })
  },
  onReachBottom: function () {
    this._getGoodsData(this.data.currenType)
  },
  onPageScroll(e) {
    const isActive = e.scrollTop > 1500;
    if (isActive != this.data.isActive) {
      this.setData({
        isActive
      })
    }
  }
})