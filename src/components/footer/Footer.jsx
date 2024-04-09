import React from 'react'
import './footer.scss'
import logo from "../../assets/images/logo/logo.png"
import facebook from "../../assets/images/logo/facebook.png"
import youtobe from "../../assets/images/logo/youtobe.png"
export default function Footer() {
  return (
    <div className='footer'>
      
      <div className='footer-container'>
        <div className='footer-infor'>
          <div className='footer-logo'>
            <img width={100} height={35} src={logo}/>
          </div>
          <div className='footer-text'>
            <p>Tầng 7 tháp A toà Sông Đà, đường Phạm Hùng, quận Nam Từ Liêm, Hà Nội</p>
            <p>0862 069 233</p>
            <p>academy@rikkeisoft.com</p>
            <div className='footer-social'>
              <img width={24} src={facebook} />
              <img width={24} src={youtobe}  />
            </div>
          </div>
         
        </div>
        <div className='footer-outsource'>

        <div className='footer-lean'>
          <p>Khóa Học</p>
          <div className='footer-textSub'>
            <p>Làm quen với Code</p>
            <p>Bootcomp Fulltime</p>
            <p>Bootcomp Parttime</p>
            <p>Kỹ sư CNTT - PTIT</p>
            <p>Bổ trợ cho nghềp</p>
          </div>
        </div>

        <div className='footer-resurces'>
        <p>Tài nguyên học tập</p>
        <div className='footer-textSub'>
          <p>Blog</p>
          <p>Ebook-Report</p>
          <p>Khóa học miến phí</p>
          <p>Sự kiện-Webinar</p>
          <p>Cộng đồng</p>
        </div>
        </div>

        <div className='footer-support'>
          <p>Vì sao chọn Rikkei Academy</p>
          <div className='footer-textSub'>
            <p>Về Rikkei Academy</p>
            <p>Hệ sinh thái Rikkei</p>
            <p>Cơ hội nghề nghiệp</p>
            <p>Tấm gương sáng</p>
            <p>Liên hệ</p>
          </div>
        </div>

        </div>
      </div>

      <p style={{textAlign: 'center', fontSize: '14px'}}>Copyright 2023 © Rikkei Education. All Rights Reserved.</p>
    </div>
  )
}
