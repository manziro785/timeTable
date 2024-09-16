import React from 'react'
import './info.css'
import img from '../../../assets/mainpage/common/image1.svg'

export default function Info() {
  return (
    <div>
        <div className="wrapper_info">
            <div className="box_info" id='about'>
                <div className="left_info">
                    <div className="btn_info">
                        see more
                    </div>
<div className="title_info">
Simplify Scheduling, <br/>
Empower Success
</div>
<div className="subt_info">
At timeTable, we believe that efficient scheduling is the key to academic success. Whether you're a student, teacher, or administrator, our intuitive tool helps you stay organized, save time, and focus on what really matters—learning and growth.
</div>
                </div>
                <div className="right_info">
<img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
