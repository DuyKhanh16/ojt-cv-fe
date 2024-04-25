import privateAxios from "../base.api";

import { API_REGISTER_CANDIDATE, API_REGISTER_COMPANY, API_LOGIN, API_LOGIN_BY_GOOGLE, API_FORGET_PASSWORD, API_GETOTP } from "../patchApi";

export const UserRegister = async (newuser) => {
    // console.log(privateAxios,"1111111")
    try {
        const res = await privateAxios.post(API_REGISTER_CANDIDATE, newuser)
        return res
    } catch (error) {
        console.log(error)
    }
}
