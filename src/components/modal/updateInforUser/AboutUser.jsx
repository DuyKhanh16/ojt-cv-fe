import React from 'react'
import './AboutUser.scss'
import "./formModal.scss"
export default function AboutUser() {
  return (
    <>
      <div className="format1 updateInforUser" style={{display: 'none'}} >
        <div className="updateInforUser__contain">
          <p>Giới thiệu về bản thân</p>
        <div className="updateInforUser__table aboutUser">
            <input type="text" placeholder='Giưới thiệu điềm mạnh bản thân' />
            <textarea name="" id="" cols="45" rows="5" placeholder='Giưới thiệu điềm mạnh bản thân'></textarea>
        </div>
        <div className="updateInforUser__button">
          <button>Cập nhập</button>
          <button className='updateInforUser__button__cancel'>Hủy Bỏ</button>
        </div>
        </div>
        
      </div>
    </>
  )
}
