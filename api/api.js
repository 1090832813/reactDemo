import http from './http'
export function getAllUser() {
    return http.get({
        url: "/get/",

    })
}
export function login(data) {
    return http.post({
        url: '/login',
        params: data
    })
}