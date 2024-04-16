import React, { useEffect, useState } from 'react'
import './formModal.scss'
import './UpdateInforUser.scss'
import logo from '../../../assets/images/main/logo.png'
import sua from '../../../assets/images/main/sualogo.png'
import deletea from '../../../assets/images/main/delete.png'
import privateAxios from '../../../config/private.axios'
export default function UpdateInforUser({isOpen,close}) {
     const [user, setUser] = useState({});
     const [userUpdate, setUserUpdate] = useState({
       name: '',
       birthday: '',
       gender: '',
       phone: '',
       address: '',
       position: '',
       link_git: ''
     });
   
     const getUser = () => {
       privateAxios.get("api/v2/candidates/getInfor")
         .then((res) => {
           console.log("API response data:", res.data.data);
           setUser(res.data.data);
           setUserUpdate({
             name: res.data.data.name,
             address: res.data.data.address,
             phone: res.data.data.phone,
             gender: res.data.data.gender,
             link_git: res.data.data.link_git,
             birthday: res.data.data.birthday,
             position: res.data.data.position
           });
         })
         .catch((error) => {
           console.error("Error:", error);
         });
     };
   
     useEffect(() => {
       getUser();
     }, []);
   
     const getChange = (e) => {
       setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
     };
     console.log(userUpdate);
     const updateInfor = async () => {
      await privateAxios
         .patch(`/api/v2/candidates/updateInfoCandidate`,userUpdate)
         .then((res) => {
           console.log("API response data:", res);
         })
         .catch((error) => {
           console.error("Error:", error);
         });
       close();
     }
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
                <input 
                onChange={getChange} 
                value={userUpdate?.name}
                name='name'
                type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">Chuyên môn </label>
                <input 
                onChange={getChange} 
                value={userUpdate?.position}
                name='position'
                type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">Địa chỉ </label>
                <input 
                onChange={getChange} 
                value={userUpdate?.address}
                name='address'
                type="text" placeholder='ABCde'/>
           </div>
           {/* <div className='inforUserItem'>
                <label htmlFor="">Email </label>
                <input 
                onChange={getChange} 
                value={userUpdate?.email}
                name='email'
                type="text" placeholder='ABCde'/>
           </div> */}
           <div className='inforUserItem'>
                <label htmlFor="">SĐT </label>
                <input onChange={getChange}
                value={userUpdate?.phone}
                name='phone' 
                type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">DOB </label>
                <input 
                onChange={getChange}
                value={userUpdate?.birthday}
                name='birthday'
                 type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">Giới tính </label>
                <input 
                onChange={getChange} 
                value={userUpdate?.gender}
                name='gender'
                type="text" placeholder='ABCde'/>
           </div>
           <div className='inforUserItem'>
                <label htmlFor="">Trang github </label>
                <input 
                onChange={getChange}
                value={userUpdate?.link_git}
                name='link_git'
                type="text" placeholder='ABCde'/>
           </div>
        </div>
        <div className="updateInforUser__button">
          <button onClick={updateInfor}>Cập nhật</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Hủy Bỏ</button>
        </div>
        </div>
        
      </div>
    </div>
       
    </>
  )
}
