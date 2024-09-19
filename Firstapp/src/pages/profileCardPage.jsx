import React from 'react'
import ProfileCard from '../components/profileCard'

export default function ProfileCardPage() {
  return (
    <div 
    style={{
      display: 'flex',
      flexWrap: 'wrap', 
      gap: '10px', 
      justifyContent:'center', 
    }}
    >
      <ProfileCard userName="John Doe" userImage="https://randomuser.me/api/portraits/men/1.jpg"/>
      <ProfileCard userName="Jane Smith" userImage="https://randomuser.me/api/portraits/women/1.jpg"/>
      <ProfileCard userName="Alice Johnson" userImage="https://randomuser.me/api/portraits/women/2.jpg"/>
      <ProfileCard userName="Bob Brown" userImage="https://randomuser.me/api/portraits/men/2.jpg"/>
      <ProfileCard userName="Charlie Davis" userImage="https://randomuser.me/api/portraits/men/3.jpg"/>
      <ProfileCard userName="Emily Wilson" userImage="https://randomuser.me/api/portraits/women/3.jpg"/>
      <ProfileCard userName="Frank Clark" userImage="https://randomuser.me/api/portraits/men/4.jpg"/>
      <ProfileCard userName="Grace Lee" userImage="https://randomuser.me/api/portraits/women/4.jpg"/>
      <ProfileCard userName="Henry Martinez" userImage="https://randomuser.me/api/portraits/men/5.jpg"/>
      <ProfileCard userName="Isabella Taylor" userImage="https://randomuser.me/api/portraits/women/5.jpg"/>
      <ProfileCard userName="Jack Anderson" userImage="https://randomuser.me/api/portraits/men/6.jpg"/>
      <ProfileCard userName="Katherine Scott" userImage="https://randomuser.me/api/portraits/women/6.jpg"/>
      <ProfileCard userName="Liam Thomas" userImage="https://randomuser.me/api/portraits/men/7.jpg"/>
      <ProfileCard userName="Mia Roberts" userImage="https://randomuser.me/api/portraits/women/7.jpg"/>
      <ProfileCard userName="Hasi Kamsa" userImage="https://randomuser.me/api/portraits/women/8.jpg"/>
    </div>
  )
}
