import React, { memo, useState } from 'react'
import '../confirm/Comfirm.scss'
import privateAxios from '../../config/private.axios'
import { notification } from 'antd'
 function Confirm({isOpen,close,value}) {

  console.log(value)
  const confirm = async  ()=>{
    if (value.table === "experience") {  
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
      
    } else if (value.table === "certificate") {
      
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