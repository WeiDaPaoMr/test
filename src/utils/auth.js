    // 存入token
    export const setToken = (token) => {
        localStorage.setItem('token', token)
    }
    // 获取token
    export const getToken = () => {
        return localStorage.getItem('token')
    }
    // 存入userInfo
    export const setUserInfo = (userInfo) => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
    // 获取userInfo
    export const getUserInfo = () => {
        return JSON.parse(localStorage.getItem('userInfo') || '{}')
    }
    // 删除token和userInfo
    export const removeTokenAddUserInfo = () => {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('token')
    }