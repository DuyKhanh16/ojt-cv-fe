import React from 'react'
import './UpdatePassword.scss'
export default function UpdatePassword() {
    const [check,setCheck] = React.useState(false)
  return (
    <>
    <div>
      <div  className=" updateInforUser"  >
        <div className="updateInforUser__contain">
          <div className='updatePassword' >
            <label>Mời nhập lại mật khẩu mới</label>
            <input type="text" placeholder="Nhập mật khẩu" onChange={(e)=>setEmail(e.target.value)}/>
            <label>Xác nhận lại mật khẩu</label>
            <input type="text" placeholder="Nhập mật khẩu" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div>
          </div>
        <div className="updateInforUser__button">
          <button >Xác nhận</button>
          <button className='updateInforUser__button__cancel' >Quay lại</button>
        </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
