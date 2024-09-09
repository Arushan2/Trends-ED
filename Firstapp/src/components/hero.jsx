import React from 'react'
import muteImage from '/Users/arushan/Documents/Trends ED/Firstapp/src/assets/a1b71c6d-fb42-4873-8327-f30ed3a53379-2.png';
import pinImage from '/Users/arushan/Documents/Trends ED/Firstapp/src/assets/pinImage.png';
import muteImage2 from '/Users/arushan/Documents/Trends ED/Firstapp/src/assets/mute.png';
import threeDotsImage from '/Users/arushan/Documents/Trends ED/Firstapp/src/assets/threeDots.png'
export default function HeroComponents({userImage,userName}) {
  return (
    <>
    <div style={{backgroundColor: '#3d4043',height:'220px', width:'200px',borderRadius:'5px',margin:'5px',position:'relative',overflow: 'hidden'}}
    onMouseEnter={(e)=>{
      const hoverImages = e.currentTarget.querySelector('.hover-images');
      if (hoverImages) hoverImages.style.display = 'flex';
    }}
    onMouseLeave={(e)=>{
      const hoverImages = e.currentTarget.querySelector('.hover-images');
      if (hoverImages) hoverImages.style.display = 'none';
    }}>
        <img src={muteImage} alt='mute' style={{height:'35px',width:'35px',position:'absolute',right:'4px',top:'4px'}}/>
        <img style={{borderRadius: '50%', width:'100px', height:'100px', top:'50px',left:'50px',position:'absolute'}}src={userImage}></img>
        <p style={{color:'white', fontFamily:'',fontWeight:'bold', textAlign:'left', fontSize:'11px',bottom:'10px',left:'10px',margin:'0',position:'absolute'}}>{userName}</p>
        <div className='hover-images' style={{display:'none', left:'49px',top:'85px',position:'absolute',backgroundColor: '#1f2124',borderRadius:'14px'}}>
          <img src={pinImage} style={{height:'20px',width:'20px',margin:'7px',hover:{backgroundColor:'#1C1E20'}}}/>
          <img src={muteImage2} style={{height:'20px',width:'20px',margin:'7px'}}/>
          <img src={threeDotsImage} style={{height:'20px',width:'20px',margin:'7px'}}/>
        </div>
    </div>
    </>
  )
}
