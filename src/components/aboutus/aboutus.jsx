import React from 'react'
import './aboutus.css'
import d from '../../assets/mainpage/common/dava.svg'
import t from '../../assets/mainpage/common/tiki.svg'
import te from '../../assets/mainpage/common/temi.svg'



export default function Aboutus() {
  return (
    <div>
<div className="aboutus">
<div className="title_about">
            Our team
        </div>
    <div className="about_us_box">
       
    <div className="div">
        <img src={d} alt="" />
        <div className="name_about">
        Davlet Azimov

            <div className="subname">
            Backend developer
            </div>
        </div>
    </div>
    <div className="div">
        <img src={t} alt="" />
        <div className="name_about">
        Tilekmat Azgygulov

            <div className="subname">
            Frontend developer 
            </div>
        </div>
    </div>
    <div className="div">
        <img src={te} alt="" />
        <div className="name_about">
        David Tennant
            <div className="subname">
                Marketer & designer
            </div>
        </div>
    </div>
    </div>
</div>
    </div>
  )
}
