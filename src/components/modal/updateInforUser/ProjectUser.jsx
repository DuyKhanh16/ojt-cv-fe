import React, { memo, useEffect, useState } from 'react'
import './formModal.scss'
import './Certificate.scss'
import { notification } from 'antd';
import privateAxios from '../../../config/private.axios';
 function ProjectUser({isOpen,close}) {

  const [user, setUser] = useState({});

const changeValue = (e) => {
  setUser({...user,[e.target.name]:e.target.value})
}
const updateProject = async () => {
  console.log(user)
  try {
    const create = await privateAxios.post(`api/v2/candidate/createProject`,user)
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
    <div style={{display:isOpen?'block':'none'}} >
       <div className="updateInforUser" >
        <div className="updateInforUser__contain">
          <h4>Dự án cá nhân</h4>
        <div className="updateInforUser__table certificate">
            <div>
              <p>Tên dự án</p>
              <input type="text" placeholder='ABCde' name='name' onChange={(e)=>changeValue(e)}/>
            </div>
            <div>
              <p>Link demo</p>
              <input type="text" placeholder='ABCde' name='link' onChange={(e)=>changeValue(e)} />
            </div>

            <div className='certificateTime'>
              <p>Thời gian thực hiện</p>
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
              <p>Mô tả chi tiết công việc</p>
              <textarea name="" id="" cols="30" rows="10" placeholder='ABCde' onChange={(e)=>setUser({...user,info:e.target.value})}></textarea>
            </div>
        </div>
        <div className="updateInforUser__button">
          <button onClick={updateProject}>Cập nhật</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Hủy Bỏ</button>
        </div>
        </div> 
      </div>
    </div>
        
    </>
  )
}
export default memo(ProjectUser)