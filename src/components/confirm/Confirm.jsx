import React from 'react'
import '../confirm/Comfirm.scss'
export default function Confirm({isOpen,close}) {
  return (
    <>
    <div style={{display:isOpen?'block':'none'}}>
      <div  className=" updateInforUser"  >
        <div className="updateInforUser__contain">
          <div style={{textAlign:'center',display:"flex",justifyContent:'center',alignItems:'center',height:"250px"}}>
            <p style={{textAlign:'center',lineHeight:'35px'}}>Bạn có chắc chắn muốn xóa công việc này không ?</p>
          </div>
        {/* <div className="updateInforUser__table aboutUser">
            <input type="text" placeholder='Giưới thiệu điềm mạnh bản thân' />
            <textarea name="" id="" cols="45" rows="5" placeholder='Giưới thiệu điềm mạnh bản thân'></textarea>
        </div> */}
        <div className="updateInforUser__button">
          <button>Xác nhận</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Hủy Bỏ</button>
        </div>
        </div>
        
      </div>
    </div></>
  )
}
