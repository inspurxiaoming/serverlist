import request from '@/utils/request'

// 查询字典类型列表
export function listType(query) {
  return request({
    url: '/config/region/list',
    method: 'get',
    params: query
  })
}
// 查询字典类型列表
export function deptListType(query) {
  return request({
    url: '/config/region/cloudcenter/list',
    method: 'get',
    params: query
  })
}

// 查询字典类型详细
export function getType(dictId) {
  return request({
    url: '/config/region/' + dictId,
    method: 'get'
  })
}

// 新增字典类型
export function addRegion(data) {
  return request({
    url: '/config/region',
    method: 'post',
    data: data
  })
}

// 修改字典类型
export function updateType(data) {
  return request({
    url: '/system/dict/type',
    method: 'put',
    data: data
  })
}

// 删除字典类型
export function delType(dictId) {
  return request({
    url: '/config/region/' + dictId,
    method: 'delete'
  })
}

// 导出字典类型
export function exportType(query) {
  return request({
    url: '/system/dict/type/export',
    method: 'get',
    params: query
  })
}

// 获取字典选择框列表
export function optionselect() {
  return request({
    url: '/system/dict/type/optionselect',
    method: 'get'
  })
}
