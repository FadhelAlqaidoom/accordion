import { useState } from 'react';
import './styles.css';
import AccordionItem from './components/AccordionItem';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

export default function App() {
  const [openId, setOpenId] = useState(0);
  const handleOpen = (id) => {
    setOpenId(id !== openId ? id : null);
  };
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          title={faq.title}
          num={i}
          id={i}
          handleOpen={handleOpen}
          openId={openId}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}
