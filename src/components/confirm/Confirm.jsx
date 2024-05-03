import React, { memo, useState } from 'react'
import '../confirm/Comfirm.scss'
import privateAxios from '../../config/private.axios'
import { notification } from 'antd'
import publicAxios from '../../config/pulic.axios'

 function Confirm({isOpen,close,value}) {

  console.log(value)
  const confirm = async  ()=>{
    if (value.table === "exp") {  
      await privateAxios
      .delete(`/api/v2/candidate/deleteExperience/${value.id}`)
      .then((res)=>{
        console.log("API response data:", res);
        notification.success({
          message:res.data.message
        })
      })
      .catch((error) => {
        notification.error({
          message: error.response.data.message,
        })
      })
      close();
    } else if (value.table === "education") {
      await privateAxios
      .delete(`/api/v2/candidate/deleteEducation/${value.id}`)
      .then((res)=>{
        console.log("API response data:", res);
        notification.success({
          message:res.data.message
        })
      })
      .catch((error) => {
        notification.error({
          message: error.response.data.message,
        })
      })
      close();      
    } else if (value.table === "project") {
      await privateAxios
      .delete(`api/v2/candidate/deleteProject/${value.id}`)
      .then((res)=>{
        console.log("API response data:", res);
        notification.success({
          message:res.data.message
        })
      })
      .catch((error) => {
        notification.error({
          message: error.response.data.message,
        })
      })
      close();
      
    } else if (value.table === "certificate") { 
      await privateAxios
      .delete(`api/v2/candidate/deleteCertificate/${value.id}`)
      .then((res)=>{
        console.log("API response data:", res);
        notification.success({
          message:res.data.message
        })
      })
      .catch((error) => {
        notification.error({
          message: error.response.data.message,
        })
      })
      close();
    } else if (value.table === "location") {
      console.log(value)
      if (value.listBrand.length === 1) {
            notification.error({
              message: "Địa điểm đang được sử dụng, vui lòng chọn địa điểm khác",
            });
            return;
          } else {
            try {
              await publicAxios.delete(
                `api/v2/companies/delete-address-company/${value.id.id}`
              );
              notification.success({
                message: "Đã xóa địa chỉ thành công",
                placement: "topRight",
                duration: 2,
              });
              close();
            } catch (error) {
              console.log(error);
            }
          }
    }else if (value.table === "skill") {
      await privateAxios
      .delete(`api/v2/candidate/deleteSkill/${value.id}`)
      .then((res)=>{
        console.log("API response data:", res);
        notification.success({
          message:res.data.message
        })
      })
      .catch((error) => {
        notification.error({
          message: error.response.data.message,
        })
      })
      close();
    }
    
    

  }
  
  return (
    <>
    <div style={{display:isOpen?'block':'none'}}>
      <div  className=" updateInforUser"  >
        <div className="updateInforUser__contain">
          <div style={{textAlign:'center',display:"flex",justifyContent:'center',alignItems:'center',height:"250px"}}>
            <p style={{textAlign:'center',lineHeight:'35px'}}>Bạn có chắc chắn muốn xóa không ?</p>
          </div>
        {/* <div className="updateInforUser__table aboutUser">
            <input type="text" placeholder='Giưới thiệu điềm mạnh bản thân' />
            <textarea name="" id="" cols="45" rows="5" placeholder='Giưới thiệu điềm mạnh bản thân'></textarea>
        </div> */}
        <div className="updateInforUser__button">
          <button onClick={confirm}>Xác nhận</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Hủy Bỏ</button>
        </div>
        </div>
        
      </div>
    </div></>
  )
}
export default memo(Confirm)