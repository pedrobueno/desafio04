import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="commentAvatar">
        <img src={comment.author.avatar} alt="avatar" />
      </div>
      <div className="commentContent">{comment.content}</div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.object,
    date: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Comment;
