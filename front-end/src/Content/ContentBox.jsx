import React from 'react';

const ContentBox = ({ title, body }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-base">{body}</p>
    </div>
  );
};

export default ContentBox;