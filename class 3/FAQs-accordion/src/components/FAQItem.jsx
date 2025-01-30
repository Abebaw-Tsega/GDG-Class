import { useState } from "react";
import Plus from '../assets/images/icon-plus.svg'
import Minus from '../assets/images/icon-minus.svg'
// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold">{question}</h3>
        <button
          className="text-xl font-bold text-purple-500 shrink-0"
          aria-expanded={isOpen}
        >
          {isOpen ? <img src={Minus} alt="-" className=' !w-8 !h-8' /> : <img src={Plus} alt="+" className='!w-[28px] !h-[28px]' />}
        </button>
      </div>
      {isOpen && <p className=" text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQItem;