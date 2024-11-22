import React from 'react'
const WomanCollection=(props)=> {
    const {title,image1,image2,image3,image4}=props.ladiesFashion
  return(
    <div className="collectionSection">
    <h2>{title}</h2>
    <div className="bannerBox">
    <img src="assets/LadiesBanner.gif" alt="Banner"/>
    </div>
<div className="menImages">
  <img src={image1} alt={title}/>
  <img src={image2} alt={title}/>
  <img src={image3} alt={title}/>
  <img src={image4} alt={title}/>
</div>
</div>
)
}
export default WomanCollection
