import { Button } from 'antd'
import React from 'react'

export default function UpdateAdressCompany({isOpen,close}) {
  return (
    <div>
        <div style={{display:isOpen?'block':'none',}}>
            <div className="updateAdress">
            <input type="text"></input>
                <button onClick={()=>close()}>Huỷ bỏ</button>
                <button onClick={()=>close()}>Xác Nhận</button>
            </div>
        </div>
    </div>
  )
}
