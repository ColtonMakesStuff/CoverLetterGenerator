// i need a componete that will end up being a accordian of questions but i will just start by making the accordian section and have it hold placeholderes
import React, { useState } from 'react';
import { useEffect } from 'react';
import { NameAndContact } from './questions/Questions';

  const Accordion = ({ }) => {


    const [activeIndex, setActiveIndex] = useState(null);
    const [NameAndContactInputValues, setNameAndContactInputValues] = useState("");
    // i want to be able to access th input value from the question component so i can use it in the preview section
    const handleQuestionAnswer = (inputValues) => {
        setNameAndContactInputValues(inputValues);

      };

   

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? (activeIndex !== null ? activeIndex : index) : index);
    };

    useEffect(() => {
        toggleAccordion(0)
      }, []);
  
      useEffect(() => {
        console.log(NameAndContactInputValues);

      }, [NameAndContactInputValues]);

      let questionArray = [
        {
            index: '1',
            title: 'Name and Contact',
            question: <NameAndContact onQuestionAnswer={handleQuestionAnswer}/>
        }
    ]

    return (
      <div className=" flex flex-col accordion h-full w-full border-solid border-2 border-black">
        {questionArray.map((item, index) => (
          <div key={index} className="accordion-item ">
            <button
              className="accordion-title bg-blue-500 text-white p-2 w-full  text-left"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
            </button>
            {activeIndex === index && (
              <div className="accordion-content p-2">
                {item.question}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

export default Accordion;
