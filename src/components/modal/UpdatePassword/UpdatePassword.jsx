import React, { useEffect } from 'react'
import './UpdatePassword.scss'
import { update } from 'firebase/database'
import { notification } from 'antd'
import publicAxios from '../../../config/pulic.axios'
import { useNavigate } from 'react-router'
export default function UpdatePassword() {
    const [token,setToken] = React.useState("")
    const [acc,setAcc] = React.useState({
        email:"",
        password:"",
        passwordConfirm:""
    })
    const navigate = useNavigate()
    const changeValue=(e)=>{
        setAcc({...acc,[e.target.name]:e.target.value})
    }
    const update= async()=>{
        if(acc.email == "" || acc.password == "" || acc.passwordConfirm == ""){
            notification.error({
                message:"Vui lòng điền đầy đủ thông tin"
            })
        }else{
            if(acc.password != acc.passwordConfirm){
                notification.error({
                    message:"Xac nhan mat khau khong khop"
                })
            }else{
                const data = {
                    email:acc.email,
                    password:acc.password,
                    token:token
                }
                try {
                    const result = await publicAxios.patch(`/api/v2/auth/updatePassword`,data)
                    notification.success({
                        message:result.data.message
                    })
                    localStorage.removeItem("tokenPassword")
                    setTimeout(() => {
                        navigate("/login")
                    },[1000])
                } catch (error) {
                    notification.error({
                        message:error.response.data.message
                    })
                }
               
            }     
        }
    }


    useEffect(() => {
       const token = JSON.parse(localStorage.getItem("tokenPassword"))
       if(token){
           setToken(token)
       }else{
           navigate("/login")
       } 
    },[])
  return (
    <>
    <div>
      <div  className=" updateInforUser"  >
        <div className="updateInforUser__contain">
          <div className='updatePassword' >
            <label>Tài khoản đăng đăng ký</label>
            <input type="text" placeholder="Nhập mật khẩu" name='email' onChange={changeValue}/>
            <label>Mời nhập lại mật khẩu mới</label>
            <input type="text" placeholder="Nhập mật khẩu" name='password' onChange={changeValue}/>
            <label>Xác nhận lại mật khẩu</label>
            <input type="text" placeholder="Nhập mật khẩu" name='passwordConfirm' onChange={changeValue}/>
          </div>
          <div>
          </div>
        <div className="updateInforUser__button">
          <button onClick={update}>Xác nhận</button>
          <button className='updateInforUser__button__cancel' onClick={() => navigate("/login")} >Quay lại</button>
        </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
