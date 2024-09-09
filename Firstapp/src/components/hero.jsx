import React from 'react'

export default function HeroComponents({userImage,userName}) {
  return (
    <>
    <div>
        <img src={userImage}></img>
        <p>{userName}</p>
    </div>
    </>
  )
}
