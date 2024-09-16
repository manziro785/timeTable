import React from 'react'
import '../noPage/noPage.css'
import Header2 from '../../components/header2/header2'
import Footer from '../../components/footer/footer'
import img11 from '../../assets/tablepage/Frame 38.svg'
import img12 from '../../assets/tablepage/Frame 39 (1).svg'
import { NavLink } from 'react-router-dom'



export default function NoPage() {
  return (
    <div>
      <Header2/>
<div className="wrapper_time">
  <div className="img">
    <img src={img11} alt="" />
  </div>
  <div className="btns_result">
    <NavLink to = '/table'>
    <div className="btn_subm">
      <button>generate again</button>

    </div>

    </NavLink>
    <a href={img11} download={img11}>
<div className="btn_subm" >
      <button style={{backgroundColor: '#515151', marginLeft: '2rem'}}>download PDF</button>
      
    </div>
    </a>

  </div>
</div>
<Footer/>
    </div>
  )
}
