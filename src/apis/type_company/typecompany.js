import privateAxios from "../base.Api"

import { API_GETALL_TYPE_COMPANY } from "../patchApi";

export const getAllTypeCompany = () => {
   try {
    const res = privateAxios.get(API_GETALL_TYPE_COMPANY)
    return res
   } catch (error) {
    console.log(error)
   }
}