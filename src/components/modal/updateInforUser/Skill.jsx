import React, { useEffect, useState } from 'react'
import './formModal.scss'
import './Skill.scss'
import gearshape from '../../../assets/images/main/gearshape.png'
import { useSelector } from 'react-redux';
import publicAxios from '../../../config/pulic.axios';
import { notification } from 'antd';
export default function Skill({isOpen,close,skill}) {
  const usera = useSelector((state) => state.candidate.data);
  const [allLevel, setAllLevel] = useState([]);
  const [user, setUser] = useState({
  });
  useEffect(() => {
    const level = publicAxios.get(`api/v2/leveljob/getall`).then((res) => {
        console.log(res.data);
      setAllLevel(res.data);
    });
    setUser({ ...user,candidate_id:usera.id});
  },[usera])
  console.log(usera);
  const changeValue = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }
  const closeModal = () => {
    setUser({});
    close();
  };
 const addSkill = async () => {
     if (skill.status == "update") {
            console.log(user);
     }else{
        try {
            const res = await publicAxios.post(`api/v2/candidate/createSkill`,user);
            notification.success({
                message: res.data.message,
            })
        } catch (error) {
            notification.error({
                message: error.response.data.message,
            })
        }
        closeModal();
     }
 }
  return (
    <>
    {
    skill.status == "update"?
    <div style={{display: isOpen?'block':'none'}}>
    <div className="format1 updateInforUser"  >
    <div className="updateInforUser__contain">
      <p>Kĩ năng</p>
    <div className="updateInforUser__table skill">
        <div className="updateInforUser__table__skill__contain">
            <div className='skillSame'>
                <label htmlFor="">Kĩ năng</label>
                <input type="text" name="name" placeholder='Mời nhập kĩ năng của bạn ...' onChange={changeValue}/>
            </div>
            <div className='skillSame'>
                <label htmlFor="">Mức độ</label>
                <select name="leveljob_id" id="" onChange={changeValue}>
                    <option value="">level</option>
                    {
                        allLevel.map((item,index) => {
                            return <option value={item.id}>{item.name}</option>
                        })
                    }
                </select>
            </div>
        </div>
    </div>

    <div className="updateInforUser__button ">
      <button onClick={addSkill}>Thêm mới </button>
      <button className='updateInforUser__button__cancel' onClick={closeModal}>Hủy Bỏ</button>
    </div>
    </div>
    
  </div>
    </div>:
    
    <div style={{display: isOpen?'block':'none'}}>
        <div className="format1 updateInforUser"  >
        <div className="updateInforUser__contain">
          <p>Kĩ năng</p>
        <div className="updateInforUser__table skill">
            <div className="updateInforUser__table__skill__contain">
                <div className='skillSame'>
                    <label htmlFor="">Kĩ năng</label>
                    <input type="text" name="name" placeholder='Mời nhập kĩ năng của bạn ...' onChange={changeValue}/>
                </div>
                <div className='skillSame'>
                    <label htmlFor="">Mức độ</label>
                    <select name="leveljob_id" id="" onChange={changeValue}>
                        <option value="">level</option>
                        {
                            allLevel.map((item,index) => {
                                return <option value={item.id}>{item.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        </div>

        <div className="updateInforUser__button ">
          <button onClick={addSkill}>Thêm mới </button>
          <button className='updateInforUser__button__cancel' onClick={closeModal}>Hủy Bỏ</button>
        </div>
        </div>
        
      </div>
    </div>
    }
    
    
    </>
  )
}
