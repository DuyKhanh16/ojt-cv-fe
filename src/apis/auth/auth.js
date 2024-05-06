import privateAxios from "../base.Api"

import { API_REGISTER_CANDIDATE,
     API_REGISTER_COMPANY, 
     API_LOGIN, 
     API_LOGIN_BY_GOOGLE, 
     API_FORGET_PASSWORD, 
     API_GETOTP, 
     API_MAIL_CHECKMAIL} 
from "../patchApi";

export const UserRegister = async (newuser) => {
    try {
        const response = await privateAxios.post(API_REGISTER_CANDIDATE, newuser)
        return response
    } catch (error) {
        return error
    }
}

export const CompanyRegister = async (newuCompany) => {
    try {
        const response = await privateAxios.post(API_REGISTER_COMPANY, newuCompany)
        return response
    } catch (error) {
        return error
    }
}
export const Login = async (user) => {
    try {
        const response = await privateAxios.post(API_LOGIN, user)
        return response
    } catch (error) {
        return error
    }
}

export const LoginByGoogle = async (user) => {
    try {
        const response = await privateAxios.post(API_LOGIN_BY_GOOGLE, user)
        return response.data
    } catch (error) {
        return error
    }
}

export const checkMail = async (email) => {
    try {
        const response = await privateAxios.get(`${API_MAIL_CHECKMAIL}?email=${email}`)
        return response
    } catch (error) {
        return error
    }
}
