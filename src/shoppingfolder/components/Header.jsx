import React from 'react'
const Header=()=> {
  return(
    <div className="headerSection">
        <div classname="left">
            <div className="title">
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Children</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div classname="searchbar">
            <input type="text" placeholder="Search..."/>
        </div>
        <div className="right">
            <div classname="signin">
                Signin/ Signup
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>
  )
}
export default Header
