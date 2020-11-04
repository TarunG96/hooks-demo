import React from 'react';

const Post = (props) => {
  const { title, body } = props;
  return (
    <div>
      <span>{title}</span>      
    </div>
  );
}

export default Post;
