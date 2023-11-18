/* eslint-disable react/prop-types */
import Item from "./Item";
import { faqArray } from "../Data";
import { useState } from "react";

const Accordion = () => {
  const [ActiveIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(ActiveIndex === index ? null : index);
  };

  return (
    <div id="accordion-wrapper" className="flex flex-col gap-0 max-w-[800px] w-full mx-auto rounded-xl border border-gray-200 divide-y overflow-hidden">
      {faqArray.map((faq, i) => (
        <Item
          key={i}
          answerID={`answer-${i + 1}`}
          questionID={`question-${i + 1}`}
          isActive={ActiveIndex === i}
          onClick={() => handleToggle(i)}
          question={faq.question}
          answer={faq.answer}
          ariaExpanded={ActiveIndex === i ? true : false}
        />
      ))}
    </div>
  );
};

export default Accordion;