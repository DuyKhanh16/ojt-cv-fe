import React from 'react'
import './FormSearch.scss'

export default function FormSearch() {
  return (
    <div className="form__search">
      <div className="form__search--content">
        <div className="form__search--image">
          <img src="./src/assets/images/userLogin/logo-rikkei2.png"></img>
        </div>
        <div className="form__search--input">
          <div className="form__search--input--boder">
         
          </div>
          <div className="form__search--input--adress">Hà Nội</div>
          <img 
          src="./src/assets/images/fromsearch/Vector.png"
          className="form__search--input--logo">
          </img>
          <img 
          className="form__search--input--logo2"
          src="./src/assets/images/fromsearch/Line 31.png">
          </img>
          <img className="form__search--input--logo3" src="./src/assets/images/fromsearch/fi_search.png"></img>
          <div className="form__search--input--text">
          <input
          placeholder="Job title, keywords, or company"
           style={{color:"red",fontSize:"14px"}}></input>
        </div>
        </div>
        <div className="form__search--notifacation">
          <img src="./src/assets/images/fromsearch/bell.fill.png"></img>
        </div>
        <div className="form__search--info">
        <img src="./src/assets/images/fromsearch/Outline.png"></img>
        </div>
        <div>
        <p style={{color:"#BC2228",fontSize:"14px"}}>Nguyễn Minh Dương</p>
        </div>
       
      </div> 
    </div>
  )
}
