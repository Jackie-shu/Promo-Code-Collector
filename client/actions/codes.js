import * as api from '../api/codes'

export const GET_ALL_CODES_SUCCESS = 'GET_ALL_CODES_SUCCESS'
export const GET_CODES_PENDING ='GET_CODES_PENDING'

export function getCodesPending () {
    return {
        type: GET_CODES_PENDING
    }
}

export function getAllCodeSuccess (codes) {
    return {
        type: GET_ALL_CODES_SUCCESS,
        codes
    }
}

export function getCodes () {
    return dispatch => {
        dispatch(getCodesPending())
        return api.getAllCodes()
            .then(codes => dispatch(getAllCodeSuccess(codes.codes)))
    }
}