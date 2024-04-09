import React from 'react'
import './formModal.scss'
import './UpdateInforUser.scss'
import logo from '../../../assets/images/main/logo.png'
import sua from '../../../assets/images/main/sualogo.png'
import deletea from '../../../assets/images/main/delete.png'
export default function UpdateInforUser({isOpen,close}) {
  return (
    <>
    <div style={{display: isOpen?'block':'none'}}>
         <div className="format1 updateInforUser"  >
        <div className="updateInforUser__contain">
          <p>Cập nhập thông tin cá nhân</p>
          <img src={logo} alt="" />
          <div style={{display:'flex',gap:'50px'}} >
            <button style={{display:'flex',alignItems:'center',gap:'10px',backgroundColor:'transparent',border:'none',fontSize:'20px',color:'black'}}>
                <img src={sua} alt="" width={20} />
                Sửa 
            </button>
            <button style={{display:'flex',alignItems:'center',gap:'10px',backgroundColor:'transparent',border:'none',fontSize:'20px',color:'black'}}>
                <img src={deletea} alt="" width={20} />
                Xoá 
            </button>
          </div>

        <div className="updateInforUser__table aboutUser inforUserUpdate">
           <div className='inforUserItem'>
                <label htmlFor="">Họ và tên </label>
                <input type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">Chức danh </label>
                <input type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">Địa chỉ </label>
                <input type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">Email </label>
                <input type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">SĐT </label>
                <input type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">DOB </label>
                <input type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">Giới tính </label>
                <input type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">Trang cá nhân </label>
                <input type="text" placeholder='ABCde'/>
           </div>
        </div>
        <div className="updateInforUser__button">
          <button>Cập nhập</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Hủy Bỏ</button>
        </div>
        </div>
        
      </div>
    </div>
       
    </>
  )
}
