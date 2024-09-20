import React from 'react';
export default function FacebookPost({ profilePicture, user, postDate, content, likes, comments }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' ,color:'GrayText'}}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        <img src={profilePicture} alt='Profile' style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
        <div>
          <p style={{ fontWeight: 'bold', fontSize: '16px',color:'GrayText' }}>{user}</p>
          <p style={{ color: '#888', fontSize: '12px' }}>{postDate}</p>
        </div>
      </div>
      <div style={{ margin: '15px 0', fontSize: '14px', color:'GrayText'}}>{content}</div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <img src='like_emoji.png' alt='like_emoji' style={{ width: '20px', marginRight: '5px' }} />
        {likes}
      </div>
      <div style={{ marginTop: '15px' }}>
        {comments.map((comment, key) => (
          <div key={key} style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginBottom: '10px', color:'GrayText' }}>
            <strong>{comment.user}:</strong> {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
}
