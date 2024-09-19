import React from 'react'

export default function FacebookPost({profilePicture,user,postDate,content,likes,comments}) {
  return (
    <>
    <div>
        <img src={profilePicture} alt='Profile image' />
        <p>{user}</p>
        <p>{postDate}</p>
        <p>{content}</p>
    </div>
    <div>
       <img src='like_emoji.png' alt='like_emoji'/>{likes}
    </div>
    <div>
        {comments.map((comment,key)=>(
          <div key={key}>
            {comment.user} : {comment.text}
          </div>
        ))}
    </div>
    </>
  )
}
