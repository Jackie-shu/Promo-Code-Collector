import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1'

export function getAllCodes () {
    return request.get(`${apiURL}/codes`)
        .then(res => res.body)
}