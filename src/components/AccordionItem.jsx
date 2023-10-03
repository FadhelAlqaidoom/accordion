import React, { useState } from 'react';
import '../styles.css';

const AccordionItem = ({ title, text, num }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`item ${open ? 'open' : ''}`}
      onClick={handleOpen}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{open ? '-' : '+'}</p>
      {open && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordionItem;
