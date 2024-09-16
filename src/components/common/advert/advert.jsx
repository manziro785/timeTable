import React from 'react'
import './advert.css'
import img_teacher from '../../../assets/mainpage/common/Frame24.svg'

export default function Advert() {
  return (
    <div>
        <div className="advert" id='adv'>
            <div className="left_adv">
<img src={img_teacher} alt="" />
            </div>
            <div className="right_adv">
                <div className="title_adv">
                Master Your Time <br/>with Ease
                </div>
                <div className="subt_adv">
                Take control of your schedule and unlock your full potential. Our app simplifies time management, helping you stay organized and productive.
                </div>
                <div className="btn_adv">
                Try it now
                </div>
            </div>

        </div>
    </div>
  )
}
