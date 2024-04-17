import React from 'react'
import './ApplyJob.scss'
export default function ApplyJob() {
  return (
    <>
    <div className='applyJob__container'>
        <div className='applyJob__bg'>

        </div>
        <div className='applyJob__content'>
            <h2>Công ty TNHH Rikkei tuyển dụng vị trí JS FullStack</h2>
            <div className='applyJob__content__input'>
              <input type="text" placeholder='Tên của bạn' />
            </div>
            <div className='applyJob__content__inputImage'>
              <p className='applyJob__content__inputImage__text'><strong>CV của bạn</strong></p>
              <div className='applyJob__content__inputImage__image'>
                <div className='applyJob__content__inputImage__image--top'>
                  <div className='applyJob__content__inputImage__image--top__circle'>
                    <div className='applyJob__content__inputImage__image--top__circle--inner'>
                    </div>
                  </div>
                  <div className='applyJob__content__inputImage__image--top__text'>
                    <p>Tải lên CV mới</p>
                  </div>

                </div>
                <div className='applyJob__content__inputImage__image--middle'>
                    <input type="file" />
                </div>
                <div className='applyJob__content__inputImage__image--bottom'>
                    <p>We accept .doc .docx, .pdf files, no password protected, up to 3MB</p>
                </div>

              </div>
              <div className='applyJob__content__inputImage__skill'>
              <p className='applyJob__content__inputImage__skill__text'><strong>Mô tả bản thân</strong></p>
              <p className='applyJob__content__inputImage__skill__textbot'>Kĩ năng, các dự án bạn đã làm hoặc những điều bạn cảm thấy phù hợp với công việc này?</p>
              <textarea className='applyJob__content__inputImage__skill__textarea' placeholder='Kĩ năng, dự án...' name="" id="" cols="58" rows="3"></textarea>
              <p className='applyJob__content__inputImage__skill__textunder'>Dưới 500 từ</p>
              </div>
            </div>
            <div className='applyJob__content__button'>
              Gửi thông tin
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}
