import React from 'react'
import FacebookPost from '../components/facebookPost'
import data from '../assets/assignemnt3_json.json'

export default function FacebookPostPage() {
  return (
    <div>
        {data.map((post,key)=>(<FacebookPost key={post.id} user={post.user} profilePicture={post.profilePicture} postDate={post.postDate} content={post.content} likes={post.likes} user1={post.comments.user}user2={post.comments.user} comments={post.comments}/>))}
    </div>
  )
}
