import '../styles.css';
import AccordionItem from './AccordionItem';

const Accordion = ({ title, text, num }) => {
  return <AccordionItem title={title} text={text} num={num} />;
};

export default Accordion;
