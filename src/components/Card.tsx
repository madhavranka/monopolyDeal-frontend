import React from 'react';

interface CardProps {
  count: number;
}

const Card: React.FC<CardProps> = ({ count }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          style={{
            width: '20px',
            height: '30px',
            backgroundColor: 'gray',
            margin: '2px',
            display: 'inline-block',
          }}
        />
      ))}
    </div>
  );
};

export default Card;
