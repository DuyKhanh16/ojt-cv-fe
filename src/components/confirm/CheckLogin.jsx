import React from 'react'
import './Comfirm.scss'
import { useNavigate } from 'react-router'
export default function CheckLogin({isOpen,close}) {
    const navigate = useNavigate()
    const gotoLogin = ()=> {
        navigate('/login')
    }
  return (
    <>
    <div style={{display:isOpen?'block':'none'}}>
      <div  className=" updateInforUser"  >
        <div className="updateInforUser__contain">
          <div style={{textAlign:'center',display:"flex",justifyContent:'center',alignItems:'center',height:"250px"}}>
            <p style={{textAlign:'center',lineHeight:'35px'}}>Bạn cần đăng nhập để xem thông tin!</p>
          </div>
        <div className="updateInforUser__button">
          <button onClick={gotoLogin}>Xác nhận</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Hủy Bỏ</button>
        </div>
        </div>
        
      </div>
    </div></>
  )
}
