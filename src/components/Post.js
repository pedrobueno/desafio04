import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Post({ post }) {
  return (
    <div className="post">
      <div className="postHeader">
        <div className="postAvatar">
          <img src={post.author.avatar} alt="avatar" />
        </div>
        <div className="postInfo">
          <span className="postAuthor">{post.author.name}</span>
          <span className="postDate">{post.date}</span>
        </div>
      </div>
      <div className="postContent">
        <p>{post.content}</p>
      </div>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.object,
    date: PropTypes.string,
    content: PropTypes.string,
    comments: PropTypes.array,
  }).isRequired,
};

export default Post;
