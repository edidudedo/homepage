import React from 'react';
import './Tag.css'; // Assuming you have a separate CSS file for styling

const Tag = ({ text, imgSrc }) => (
  <div className="tag">
    {imgSrc && <img src = {imgSrc} alt = {imgSrc} />}
    {text}
</div>
);

export default Tag;