import '../styles.css';

const AccordionItem = ({
  title,
  children,
  handleOpen,
  openId,
  id,
}) => {
  return (
    <div
      className={`item ${openId === id ? 'open' : ''}`}
      onClick={() => handleOpen(id)}
    >
      <p className="number">{id < 9 ? `0${id + 1}` : id + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{openId === id ? '-' : '+'}</p>
      {openId === id && <div className="content-box">{children}</div>}
    </div>
  );
};

export default AccordionItem;
