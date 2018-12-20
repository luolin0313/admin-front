import axios from '@/libs/http'

// 获取所有主机
export const getTableData = (params) => {
  return axios.request({
    url: '/api/cmdb/server/',
    method: 'get',
    params
  })
}
// // 根据条件搜索主机
// export const searchTableData = (key, value) => {
//   return axios.request({
//     url: `/api/cmdb/server/?${key}=${value}`,
//     method: 'get'
//   })
// }

// 获取所有管理用户
export const getAdmUser = () => {
  return axios.request({
    url: '/api/cmdb/adm_user/',
    method: 'get'
  })
}

// 获取所有主机组 getGroupList
export const getGroupList = () => {
  return axios.request({
    url: '/api/cmdb/server_group/',
    method: 'get'
  })
}

// 获取所有主机组 getTagList
export const getTagList = () => {
  return axios.request({
    url: '/api/cmdb/tag/',
    method: 'get'
  })
}

// 添加或修改主机
export const addProject = (data, url, action) => {
  return axios.request({
    url: `/api/cmdb/server${url}`,
    method: action,
    data
  })
}

// 批量添加主机
export const multiAdd = (data) => {
  return axios.request({
    url: '/api/cmdb/server_multiadd/',
    method: 'post',
    data
  })
}

// 删除主机
export const delServer = (id) => {
  return axios.request({
    url: `/api/cmdb/server/${id}`,
    method: 'delete'
  })
}

// 批量删除主机
export const delMultiServer = (data) => {
  return axios.request({
    url: '/api/cmdb/server_multidel/',
    method: 'post',
    data
  })
}

// 更新资产
export const rsyncHostData = (data) => {
  return axios.request({
    url: '/api/cmdb/server_update/',
    method: 'post',
    data
  })
}

// 推送公钥
export const rsyncPublicKeyData = (data) => {
  return axios.request({
    url: '/api/cmdb/server_publickey/',
    method: 'post',
    data
  })
}

// WEB Socket
export const webSocketUrl = 'ws://172.16.80.12:8000/ws/terminal'
