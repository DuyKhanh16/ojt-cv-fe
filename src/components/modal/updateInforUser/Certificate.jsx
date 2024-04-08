import React from 'react'
import './formModal.scss'
import './Certificate.scss'

export default function Certificate() {
  return (
    <>
      <div className="updateInforUser" style={{display: 'none'}} >
        <div className="updateInforUser__contain">
          <h4>Chứng Chỉ</h4>
        <div className="updateInforUser__table certificate">
            <div>
              <p>Tên chứng chi</p>
              <input type="text" placeholder='ABCde' />
            </div>
            <div>
              <p>Tổ chức</p>
              <input type="text" placeholder='ABCde' />
            </div>

            <div className='certificateTime'>
              <p>Thời gian</p>
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
              <p>Mô tả thêm</p>
              <textarea name="" id="" cols="30" rows="10" placeholder='ABCde'></textarea>
            </div>
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
