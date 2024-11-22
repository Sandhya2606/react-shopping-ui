import React,{useState} from 'react'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import {Gents,Ladies} from '../data'
import WomanCollection from '../components/WomanCollection'
const Mainpage=()=> {
  const [gentsFashion,setGentsFashion]=useState(Gents)
  const [ladiesFashion,setLadiesFashion]=useState(Ladies)
  console.log(Gents)
  return(
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion}/>
        <WomanCollection ladiesFashion={ladiesFashion}/>
        <Footer/>
    </div>
  )
}
export default Mainpage
