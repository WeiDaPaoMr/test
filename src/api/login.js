import request from "../utils/request"

const GetLoginList = (username = yangmr, password = 123456, data = {}) => {
    return request({
        url: `user/login/${username}/${password}`,
        method: "POST",
        data
    })
}
const GetLoginImg = (code, data = {}) => {
    return request({
        url: `sysUser/image/${code}`,
        method: "POST",
        data
    })
}

const GetPermissionList = (data = {}) => {
    return request({
        url: `sysUser/getPermissionList`,
        method: "GET",
        data
    })
}
export default {
    GetLoginList,
    GetLoginImg,
    GetPermissionList
}