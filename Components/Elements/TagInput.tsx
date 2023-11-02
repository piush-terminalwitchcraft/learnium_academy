"use client";
import React, { useState, useRef } from 'react';
import './style.css';

const InputTag: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['Tags', 'Input']);
  const tagInput = useRef<HTMLInputElement>(null);

  const removeTag = (i: number) => {
    const newTags = tags.filter((_, index) => index !== i);
    setTags(newTags);
  };

  const inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const val = (e.target as HTMLInputElement).value;
    if (e.key === 'Enter' && val) {
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);
      if (tagInput.current) {
        tagInput.current.value = '';
      }
    } else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div className="input-tag">
      <ul className="input-tag__tags">
        {tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button type="button" onClick={() => removeTag(i)}>+</button>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input type="text" onKeyDown={inputKeyDown} ref={tagInput} />
        </li>
      </ul>
    </div>
  );
};

export default InputTag;
