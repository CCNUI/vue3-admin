export function localGet (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}

export function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove (key) {
  window.localStorage.removeItem(key)
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji (str = '') {
  const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
  return str.match(reg) && str.match(reg).length
}

// 单张图片上传
export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file'
// 多张图片上传
export const uploadImgsServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files'

export const pathMap = {
  login: '用户登录',
  introduce: '系统说明',
  dashboard: '总体数据',
  add: '商品上新',
  swiper: '轮播图设置',
  hot: '爆款好物设置',
  new: '新品发布设置',
  recommend: '私人推荐设置',
  category: '商品类目管理',
  level2: '二级分类管理',
  level3: '三级分类管理',
  good: '管理商品信息',
  guest: '用户管理',
  order: '订单管理',
  order_detail: '订单信息',
  account: '更新账户信息'
}