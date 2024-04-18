import React, { useState ,memo} from 'react'
import './AboutUser.scss'
import "./formModal.scss"
import privateAxios from '../../../config/private.axios'
import { notification } from 'antd'
function AboutUser({isOpen,close,aboutme}) {
  console.log(aboutme)
  const [aboutUser, setAboutUser] = useState({
    aboutMe: aboutme
  })
  const getChange = (e) => {
    setAboutUser({ ...aboutUser, [e.target.name]: e.target.value });
  }
  const handleUpdate = async ()=> {
      await privateAxios
      .patch(`/api/v2/candidates/updateAboutMe`,aboutUser)
      .then((res)=>{
        console.log("API response data:", res);
        close();
        setAboutUser("")
        notification.success({
          message:"Thêm thông tin thành công"
        })
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <>
    <div style={{display:isOpen?'block':'none'}}>
      <div  className=" updateInforUser"  >
        <div className="updateInforUser__contain">
          <p>Giới thiệu về bản thân</p>
        <div className="updateInforUser__table aboutUser">
            <label htmlFor="">Mô tả bản thân</label>
            <textarea 
            value={aboutUser.aboutMe||"" }
            onChange={getChange} name="aboutMe" id="" cols="45" rows="5" placeholder='Giới thiệu kinh nghiệm bản thân'></textarea>
        </div>
        <div className="updateInforUser__button">
          <button onClick={handleUpdate}>Cập nhật</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Hủy Bỏ</button>
        </div>
        </div>
        
      </div>
      </div>
    </>
  )
}
export default  memo(AboutUser)