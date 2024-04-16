import React, { useEffect, useState } from 'react'
import './formModal.scss'
import './Certificate.scss'
import privateAxios from '../../../config/private.axios'
import { notification } from 'antd';

export default function Education({isOpen,close}) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = privateAxios.get("api/v2/candidates/getInfor")
    getUser.then((res) => {
      console.log("API response data:", res.data.data)
      setUser({...user,candidate_id:res.data.data.id});

    }) 
  }, [])
const changeValue = (e) => {
  setUser({...user,[e.target.name]:e.target.value})
}
  const updateEducatrion = async () => {
    console.log(user)
    try {
      const create = await privateAxios.post(`api/v2/candidate/createEducation`,user)
      notification.success({
        message: create.data.message,
      })
      close()
    } catch (error) {
      notification.error({
        message: error.response.data.message,
      })
    }
   
  }
  return (
    <>
    <div style={{display:isOpen?'block':'none'}}>
      <div className="updateInforUser"  >
        <div className="updateInforUser__contain">
          <h4>Học Vấn</h4>
        <div className="updateInforUser__table certificate">
            <div>
              <p>Trường</p>
              <input type="text" placeholder='ABCde' name='name_education' onChange={(e)=>changeValue(e)}/>
            </div>
            <div>
              <p>Ngành Học</p>
              <input type="text" placeholder='ABCde'  name='major' onChange={(e)=>changeValue(e)}/>
            </div>

            <div className='certificateTime'>
              <p>Thời gian học tập</p>
              <div className='timeSame'>
                <label htmlFor="">Start Date</label>
                <input type="date" className='date' name='start_at' onChange={(e)=>changeValue(e)}/>
              </div>
              <p>To</p>
              <div className='timeSame'>
                <label htmlFor="">End Date</label>
                <input type="date" className='date' name='end_at' onChange={(e)=>changeValue(e)}/>
              </div>
            </div>

            <div>
              <p>Thông tin thêm</p>
              <textarea name="" id="" cols="30" rows="10" placeholder='ABCde' onChange={(e)=>setUser({...user,info:e.target.value})}></textarea>
            </div>
        </div>
        <div className="updateInforUser__button">
          <button onClick={updateEducatrion}>Cập nhập</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Hủy Bỏ</button>
        </div>
        </div> 
      </div>
    </div>
    
    </>
  )
}
