import React from 'react';

type RatingProps = {
  stars: string | number;
};

const Rating: React.FC<RatingProps> = ({ stars }) => {
  stars = Number(stars);
  let isStarActive: boolean[] = [];
  for (let i = 0; i < 5; i++) {
    i < stars ? isStarActive.push(true) : isStarActive.push(false);
  }

  return (
    <div className="card-item__rating">
      <div className="rating">
        <div className="rating__wrapper">
          {isStarActive.map((star, index) => (
            <div key={index} className={star ? 'active' : ''}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
