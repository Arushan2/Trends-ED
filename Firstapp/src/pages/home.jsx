import React from 'react'
import HeroComponents from '../components/hero'

export default function Home() {
  return (
    <div 
    style={{
      display: 'flex',
      flexWrap: 'wrap', 
      gap: '10px', 
      justifyContent:'center', 
    }}
    >
      <HeroComponents userName="John Doe" userImage="https://randomuser.me/api/portraits/men/1.jpg"/>
      <HeroComponents userName="Jane Smith" userImage="https://randomuser.me/api/portraits/women/1.jpg"/>
      <HeroComponents userName="Alice Johnson" userImage="https://randomuser.me/api/portraits/women/2.jpg"/>
      <HeroComponents userName="Bob Brown" userImage="https://randomuser.me/api/portraits/men/2.jpg"/>
      <HeroComponents userName="Charlie Davis" userImage="https://randomuser.me/api/portraits/men/3.jpg"/>
      <HeroComponents userName="Emily Wilson" userImage="https://randomuser.me/api/portraits/women/3.jpg"/>
      <HeroComponents userName="Frank Clark" userImage="https://randomuser.me/api/portraits/men/4.jpg"/>
      <HeroComponents userName="Grace Lee" userImage="https://randomuser.me/api/portraits/women/4.jpg"/>
      <HeroComponents userName="Henry Martinez" userImage="https://randomuser.me/api/portraits/men/5.jpg"/>
      <HeroComponents userName="Isabella Taylor" userImage="https://randomuser.me/api/portraits/women/5.jpg"/>
      <HeroComponents userName="Jack Anderson" userImage="https://randomuser.me/api/portraits/men/6.jpg"/>
      <HeroComponents userName="Katherine Scott" userImage="https://randomuser.me/api/portraits/women/6.jpg"/>
      <HeroComponents userName="Liam Thomas" userImage="https://randomuser.me/api/portraits/men/7.jpg"/>
      <HeroComponents userName="Mia Roberts" userImage="https://randomuser.me/api/portraits/women/7.jpg"/>
    </div>
  )
}
