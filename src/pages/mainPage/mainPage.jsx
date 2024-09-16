import React from 'react'
import '../mainPage/mainPage.css'
import Header from '../../components/common/Header/header'
import Banner from '../../components/common/Banner/banner'
import Info from '../../components/common/info/info'
import Advert from '../../components/common/advert/advert'
import Aboutus from '../../components/aboutus/aboutus'
import Footer from '../../components/footer/footer'

export default function MainPage() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Info/>
        <Advert/>
        <Aboutus/>
        <Footer/>
    </div>
  )
}
