import React, { useState } from 'react'
import FacebookPost from '../components/facebookPost'
import data from '../assets/assignemnt3_json.json'

export default function FacebookPostPage() {
  const [datas, setdatas] = useState(data)
  const [Content,setContent]=useState('')
  const HandlePost = () =>{
    const newPost = {
      id: datas.length + 1,
      user: 'Sujitharan Arushan',
      profilePicture: 'https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-1/455279625_1443433029689807_926931548895136233_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFD2dxmgV3h8uWSMJUqIPj8qQkg7vhe-qapCSDu-F76ppOsVneSGheoVyycVLMGIfNkFfYc1e0X5cWnFOqji2gg&_nc_ohc=Dm4P9CMTeh4Q7kNvgFmPJfw&_nc_ht=scontent.fcmb4-2.fna&oh=00_AYDZzoS30gxqZzUws9fndRWKj5z9e2pHVbUoRy2sF9ke8Q&oe=66F1B911', 
      postDate: "2024-09-19T16:47:00Z", 
      content: Content,
      likes: 24,
      comments: 
      [
        { "user": "Katlia Devin", "text": "Amazing Day!" },
        { "user": "Furions Bolt", "text": "I need to meet you!" }
      ]
    };
    setdatas([newPost, ...datas]);
    setContent('');
    }
  return (
    <div>
      <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' ,color:'GrayText'}}>
        <p style={{ fontWeight: 'bold', fontSize: '16px',color:'GrayText' }}>Sujitharan Arushan</p>
        <input type='text' placeholder='Whatis in your mind?' style={{width:'500px', height:'70px', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', margin: '20px auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' ,color:'GrayText'}} onChange={(e)=>setContent(e.target.value)}/>
        <button onClick={()=>HandlePost()} style={{backgroundColor:'#0665ff'}}>Post</button>
      </div>
        {datas.map((post,key)=>(<FacebookPost key={post.id} user={post.user} profilePicture={post.profilePicture} postDate={post.postDate} content={post.content} likes={post.likes} user1={post.comments.user}user2={post.comments.user} comments={post.comments}/>))}
    </div>
  )
}
