import React, { useEffect, useRef, useState } from 'react'
import './formModal.scss'
import './Certificate.scss'
import privateAxios from '../../../config/private.axios';
import { notification } from 'antd';
import publicAxios from '../../../config/pulic.axios';

export default function Education({isOpen,close}) {
  const [user, setUser] = useState({});
  const [flag, setFlag]= useState(0);
  const [education, setEducation] = useState({
    candidate_id: "",
    name_education: '',
    major: '',
    started_at: '',
    end_at: '',
    info: '',
  });
  const getUser = () => {
    privateAxios.get("api/v2/candidates/getInfor")
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  // const {candidate_id,name_education,major,started_at,end_at,info} = body
  
  const getChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }
  const updateEducation = async () => {
    const result = user?.account_candidate_id
    setEducation({...education,candidate_id:60})
    // console.log("111",education)
    await publicAxios
    .post(`api/v2/candidate/createEducation`,education)
    .then((res)=>{
      close();
      notification.success({
        message:"Thêm thông tin học vấn thành công"
      })
    })
    .catch((error)=>{
      console.error("Error:", error);
    })
  }
  useEffect(() => {
    getUser();
  }, [flag]);
  return (
    <>
    <div style={{display:isOpen?'block':'none'}}>
      <div className="updateInforUser"  >
        <div className="updateInforUser__contain">
          <h4>Học Vấn</h4>
        <div className="updateInforUser__table certificate">
            <div>
              <p>Trường</p>
              <input 
              onChange={getChange}
              value={education.name_education} 
              name='name_education'
              type="text" placeholder='ABCde' />
            </div>
            <div>
              <p>Ngành Học</p>
              <input 
              value={education.major}
              name='major'
              onChange={getChange} type="text" placeholder='ABCde' />
            </div>

            <div className='certificateTime'>
              <p>Thời gian học tập</p>
              <div className='timeSame'>
                <label htmlFor="">Start Date</label>
                <input 
                value={education.started_at}
                onChange={getChange} 
                name='started_at'
                type="date" className='date'/>
              </div>
              <p>To</p>
              <div className='timeSame'>
                <label htmlFor="">End Date</label>
                <input 
                value={education.end_at}
                onChange={getChange} 
                name='end_at'
                type="date" className='date'/>
              </div>
            </div>

            <div>
              <p>Thông tin thêm</p>
              <textarea 
              value={education.info}
              onChange={getChange} 
              name="info" id="" cols="30" rows="10" placeholder='ABCde'></textarea>
            </div>
        </div>
        <div className="updateInforUser__button">
          <button onClick={updateEducation}>Cập nhật</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Hủy Bỏ</button>
        </div>
        </div> 
      </div>
    </div>
    
    </>
  )
}
