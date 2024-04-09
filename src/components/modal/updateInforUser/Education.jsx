import React from 'react'
import './formModal.scss'
import './Certificate.scss'

export default function Education({isOpen,close}) {
  return (
    <>
    <div style={{display:isOpen?'block':'none'}}>
      <div className="updateInforUser"  >
        <div className="updateInforUser__contain">
          <h4>Học Vấn</h4>
        <div className="updateInforUser__table certificate">
            <div>
              <p>Trường</p>
              <input type="text" placeholder='ABCde' />
            </div>
            <div>
              <p>Ngành Học</p>
              <input type="text" placeholder='ABCde' />
            </div>

            <div className='certificateTime'>
              <p>Thời gian học tập</p>
              <div className='timeSame'>
                <label htmlFor="">Start Date</label>
                <input type="date" className='date'/>
              </div>
              <p>To</p>
              <div className='timeSame'>
                <label htmlFor="">End Date</label>
                <input type="date" className='date'/>
              </div>
            </div>

            <div>
              <p>Thông tin thêm</p>
              <textarea name="" id="" cols="30" rows="10" placeholder='ABCde'></textarea>
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
