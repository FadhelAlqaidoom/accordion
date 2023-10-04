import '../styles.css';
import AccordionItem from './AccordionItem';

const Accordion = ({ title, text, num, handleOpen, id, openId }) => {
  return (
    <AccordionItem
      title={title}
      text={text}
      num={num}
      id={id}
      handleOpen={handleOpen}
      openId={openId}
    />
  );
};

export default Accordion;
