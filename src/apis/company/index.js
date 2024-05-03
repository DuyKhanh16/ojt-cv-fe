import privateAxios from "../base.Api"
import {
    API_COMPANY_GETALL,
    API_COMPANY_GETINFOR,
    API_GETJOBSFOR_COMPANY,
    API_COMPANY_UPDATEINFOR_BYID,
    API_CREAT_BRAND_COMPANY,
    API_UPDATE_BRAND_COMPANY,
    API_DELETE_BRAND_COMPANY
} from "../patchApi";

export const getInforCompany = async () => {
    try {
        const res = await privateAxios.get(API_COMPANY_GETINFOR)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// lấy các job của công ty
export const getJobsForCompanyS = async () => {
    try {
        const res = await privateAxios.get(API_GETJOBSFOR_COMPANY)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getalljobsCompanys = async (status) => {
    try {
        const res = await privateAxios.get(`${API_GETJOBSFOR_COMPANY}/?status=${status}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
// update info company
export const updateInfoCompany = async (id, data) => {
    try {
        const res = await privateAxios.patch(`${API_COMPANY_UPDATEINFOR_BYID}/${id}`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// thêm mới địa chỉ công ty
export const createAddressCompany = async (id,data) => {
    try {
        const res = await privateAxios.post(`${API_CREAT_BRAND_COMPANY}/${id}`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// /update address company
export const updateAddressCompany = async (id, data) => {
    try {
        const res = await privateAxios.patch(`${API_UPDATE_BRAND_COMPANY}/${id}`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
// xoá chi nhánh công ty
export const deleteAddressCompany = async (id) => {
    try {
        const res = await privateAxios.delete(`${API_DELETE_BRAND_COMPANY}/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// search job theo tên
export const searchJobs = async (name) => {
    try {
        const res = await privateAxios.get(`${API_GETJOBSFOR_COMPANY}/?key=${name}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

