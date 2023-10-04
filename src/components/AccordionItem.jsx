import '../styles.css';

const AccordionItem = ({
  title,
  text,
  num,
  handleOpen,
  openId,
  id,
}) => {
  return (
    <div
      className={`item ${openId === id ? 'open' : ''}`}
      onClick={() => handleOpen(id)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{openId === id ? '-' : '+'}</p>
      {openId === id && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordionItem;
