import React from 'react'
import './formModal.scss'
import './Skill.scss'
import gearshape from '../../../assets/images/main/gearshape.png'
export default function Skill() {
  return (
    <>
    <div className="format1 updateInforUser" style={{display: 'none'}} >
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
          <button>Cập nhập</button>
          <button className='updateInforUser__button__cancel'>Hủy Bỏ</button>
        </div>
        </div>
        
      </div>
    </>
  )
}
