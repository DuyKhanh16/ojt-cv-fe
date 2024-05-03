import privateAxios from "../base.Api"

import { API_GETALL_TYPE_COMPANY } from "../patchApi";

export const getAllTypeCompany = async () => {
   try {
    const res = await privateAxios.get(API_GETALL_TYPE_COMPANY)
    return res.data
   } catch (error) {
    console.log(error)
   }
}