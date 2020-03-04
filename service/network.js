import {
  baseURL
} from './config.js'

export default function(options) {
  wx.showLoading({
    title: '数据加载中ing',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout: 5000,
      data: options.data,
      success: function(res) {
        resolve(res)
      },
      fail: reject,
      complete: res => {
        wx.hideLoading()
      }
    })
  })
}