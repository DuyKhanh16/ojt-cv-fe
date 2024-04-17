import React, { useEffect, useState } from 'react'
import './formModal.scss'
import './Skill.scss'
import gearshape from '../../../assets/images/main/gearshape.png'
import privateAxios from '../../../config/private.axios';
export default function Skill({isOpen,close}) {
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
  return (
    <>
    <div style={{display: isOpen?'block':'none'}}>
        <div className="format1 updateInforUser"  >
        <div className="updateInforUser__contain">
          <p>Kĩ năng</p>
        <div className="updateInforUser__table skill">
            <div className="updateInforUser__table__skill__contain">
                <div className='skillSame'>
                    <label htmlFor="">Kĩ năng</label>
                    <select name="" id="">
                        <option value="">Reacjs</option>
                    </select>
                </div>
                <div className='skillSame'>
                    <label htmlFor="">Mức độ</label>
                    <select name="" id="">
                        <option value="">Senior</option>
                    </select>
                </div>
                <div className='skillButton'>
                    <button>Thêm mới</button>
                </div>
            </div>
        </div>

        <div className='updateInforUser__table__skill__level'>
            <div className='updateInforUser__table__skill__level--item' >
                <div>
                <img src={gearshape} alt=""  />
                </div>
                <div className='levelSame'>
                    <label htmlFor="">Thành thạo</label>
                    <input type="text" name="" id="" placeholder='Chưa thêm kỹ năng nào' />
                </div>
            </div>
            <div className='updateInforUser__table__skill__level--item' >
                <div>
                <img src={gearshape} alt=""  />
                </div>
                <div className='levelSame'>
                    <label htmlFor="">Trung Bình</label>
                    <input type="text" name="" id="" placeholder='Chưa thêm kỹ năng nào' />
                </div>
            </div>
            <div className='updateInforUser__table__skill__level--item' >
                <div>
                <img src={gearshape} alt=""  />
                </div>
                <div className='levelSame'>
                    <label htmlFor="">Mới bắt đầu</label>
                    <input type="text" name="" id="" placeholder='Chưa thêm kỹ năng nào' />
                </div>
            </div>
        </div>

        <div className="updateInforUser__button ">
          <button>Cập nhật</button>
          <button className='updateInforUser__button__cancel' onClick={()=>close()}>Hủy Bỏ</button>
        </div>
        </div>
        
      </div>
    </div>
    
    </>
  )
}
