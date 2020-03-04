// pages/category/category.js
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from '../../service/category.js'

Page({
  data: {
    categories: [],
    categoryData: [],
    currentIndex: 0
  },
  onLoad: function (options) {
    this._getCategory()
  },
  _getCategory() {
    getCategory().then(res => {
      // 获取菜单分类
      var list = res.data.data.category.list

      // 初始化categoryData
      var categoryData = []
      var length = list.length
      for (var i = 0; i < length; i++) {
        categoryData[i] = { subcategories: [], categoryDetail: [] }
      }
      this.setData({
        categories: list,
        categoryData: categoryData
      })

      // 获取商品列表
      this._getCategoryData()
    }).catch(err => err)
  },
  _getCategoryData() {
    var index = this.data.currentIndex
    var maitKey = this.data.categories[index].maitKey
    var miniWallkey = this.data.categories[index].miniWallkey
    var type = 'pop'
    var tempCategoryData = this.data.categoryData

    // 获取上面部分数据
    getSubcategory(maitKey).then(res => {
      tempCategoryData[index].subcategories = res.data.data.list
    })
    // 获取下面部分数据
    getCategoryDetail(miniWallkey, type).then(res => {
      tempCategoryData[index].categoryDetail = res.data
      this.setData({
        categoryData: tempCategoryData,
      })
    })
  },
  handleMenuClick(event) {
    // 将所选中的type保存下来
    var currentIndex = event.detail
    this.setData({
      currentIndex
    })
    // 重新请求商品数据
    this._getCategoryData()
  },
})