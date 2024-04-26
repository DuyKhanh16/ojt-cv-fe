import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import './ForgetPassword.scss'
import publicAxios from '../../../config/pulic.axios'
import { set } from 'firebase/database'
import { checkMail } from '../../../apis/auth/auth'
export default function ForgetPassword({isOpen,close}) {
    const [email, setEmail] = React.useState('')
    const [check, setCheck] = React.useState("")
    const checkEmail = async()=> {
        const result = await checkMail(email)
        setCheck(result.data.check)
        setTimeout(() => {
            close()
        },[1000])
    }
  return (
    <>
    <div style={{display:isOpen?'block':'none'}}>
      <div  className=" updateInforUser"  >
        <div className="updateInforUser__contain">
          <div className='forgetPassword' >
            <p>Mời nhập lại tài khoản đăng nhập :</p>
            <input type="text" placeholder="Nhập email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          {check?<div className='forgetPassword-alert'>
            {
                check == 1 ? <p style={{color:"red"}}>Tài khoản không tồn tại</p>:<p style={{color:"green"}}>Hãy kiểm tra email để đặt lại mật khẩu</p>
            }
          </div>:""
            }
          <div>
          </div>
        <div className="updateInforUser__button">
          <button onClick={checkEmail}>Xác nhận</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Quay lại</button>
        </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
