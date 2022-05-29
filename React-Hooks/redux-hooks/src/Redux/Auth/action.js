 

export const ADDAUTH = "ADDAUTH"

export const addAuth = (data) => {
    return {
        type : ADDAUTH,
        payload : data
    }
}