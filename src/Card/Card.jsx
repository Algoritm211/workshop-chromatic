import React from 'react';
import './Card.css'

const Card = ({title, tag, description, author, date}) => {
  return (
    <div className="card">
        <div className="card__header">
          <img
            src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJ8fHx8fHwxNjUyMDg2MTY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600" alt="card__image" className="card__image" width="600"
          />
        </div>
        <div className="card__body">
          <span className="tag tag-blue">{tag}</span>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="user">
            <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
              <div className="user__info">
                <h5>{author}</h5>
                <small>{date}</small>
              </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
