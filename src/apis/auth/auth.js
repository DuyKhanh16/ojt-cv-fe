import privateAxios from "../base.Api"

import { API_REGISTER_CANDIDATE,
     API_REGISTER_COMPANY, 
     API_LOGIN, 
     API_LOGIN_BY_GOOGLE, 
     API_FORGET_PASSWORD, 
     API_GETOTP } 
from "../patchApi";

export const UserRegister = async (newuser) => {
    try {
        const res = await privateAxios.post(API_REGISTER_CANDIDATE, newuser)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const CompanyRegister = async (newuCompany) => {
    try {
        const res = await privateAxios.post(API_REGISTER_COMPANY, newuCompany)
        return res
    } catch (error) {
        console.log(error)
    }
}
export const Login = async (user) => {
    try {
        const res = await privateAxios.post(API_LOGIN, user)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const LoginByGoogle = async (user) => {
    try {
        const res = await privateAxios.post(API_LOGIN_BY_GOOGLE, user)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const checkMail = async (email) => {
    try {
        const res = await privateAxios.post(`${API_MAIL_CHECKMAIL}?email=${email}`)
        return res
    } catch (error) {
        console.log(error)
    }
}
