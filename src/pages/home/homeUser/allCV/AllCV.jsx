import React from 'react'
import './AllCV.scss'
import cv1 from '../../../../assets/images/cv/cv1.png'
import cv2 from '../../../../assets/images/cv/cv2.png'
import cv3 from '../../../../assets/images/cv/cv3.png'
import cv4 from '../../../../assets/images/cv/cv4.png'
import CV2 from '../../../../components/cv/cv2/CV2'
import CV1 from '../../../../components/cv/cv1/CV1'
import CV3 from '../../../../components/cv/cv3/Cv3'
export default function AllCV() {
  return (
    <>
    <div className='allCV__container'>
      <div className='allCV__header'>
        <div className='allCV__header--left'>
        <span class="material-symbols-outlined">
          chevron_left
        </span>
        <p>Trở lại cập nhật hồ sơ</p>
        </div>
        <div className='allCV__header--mid'>
          <p><strong>Mẫu CV</strong></p>
        </div>
        <div className='allCV__header--right'>
            <p className='allCV__header--right_EN'>EN</p>
            <div className='allCV__header--right_line'>
            </div>
            <p className='allCV__header--right_VI'>VI</p>
        </div>

      </div>
      <div className='allCV__content'>
        <div className='allCV__content--left'>
          <div className='allCV__content--left__list'>
            <div className='allCV__content--left__list__item cv1'>
              <div className='allCV__content--left__item--img'>
              <img src={cv1} alt="" />
              </div>
              <div className='allCV__content--left__item--choose'>
                <span class="material-symbols-outlined">
                done
                </span>
              </div>
              <span>CV 1</span>
            </div>
            <div className='allCV__content--left__list__item cv2'>
              <div className='allCV__content--left__item--img'>
              <img src={cv2} alt="" />
              </div>
              <span>CV 2</span>
            </div>
            <div className='allCV__content--left__list__item cv3'>
              <div className='allCV__content--left__item--img'>
              <img src={cv3} alt="" />
              </div>
              <span>CV 3</span>
            </div>
            <div className='allCV__content--left__list__item cv4'>
              <div className='allCV__content--left__item--img'>
              <img src={cv4} alt="" />
              </div>
              <span>CV 4</span>
            </div>
          </div>
          
        </div>
        <div className='allCV__content--right'>
              <div>
                <CV2></CV2>
              </div>
              <div className='allCV__content--right__export'>
                <div className='allCV__content--right__export--context'>
                  Upgrade profile to "Excellent" to unlock Download CV
                </div>
                 <div className='allCV__content--right__export--btn'>
                 <span class="material-symbols-outlined">
                  download
                  </span>
                  <div className='allCV__content--right__export--btn__text'>
                    Download CV
                  </div>
                 </div>
              </div>
        </div>

      </div>

    </div>
    
    
    
    </>
  )
}
