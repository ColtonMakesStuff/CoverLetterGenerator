import { Question } from "./BasicQuestion";
import { useEffect, useState } from 'react';

export const NameAndContact = ({ onQuestionAnswer }) => {
  const [inputValues, setInputValues] = useState({ name: '', email: '', phoneNumber: '' });

  const handleInputChange = (value, content) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [content]: value
      
    }));
  };

  useEffect(() => {
    onQuestionAnswer(inputValues);
  }
  , [inputValues]);

  return (
    <div className="flex w-100" style={{ height: '200px' }}>
      <div>
        <Question
          inputValue={inputValues.name}
          onInputChange={(value) => handleInputChange(value, 'name')}
          placeholder={"im a placeholder"}
          rows={1}
          orientation={"horizontal"}
          content={"name"}      
        />  
        <Question
          inputValue={inputValues.email}
          onInputChange={(value) => handleInputChange(value, 'email')}
          placeholder={"im a placeholder"}
          rows={1}
          orientation={"horizontal"}
          content={"email"}      
        />  
        <Question
          inputValue={inputValues.phoneNumber}
          onInputChange={(value) => handleInputChange(value, 'phoneNumber')}
          placeholder={"im a placeholder"}
          rows={1}
          orientation={"horizontal"}
          content={"phone number"}      
        />  
      </div>
        
      <div className="w-1/2 h-full bg-gray-300 border-solid border-2 border-black rounded-lg" style={{ flex: '3' }}>
        <h1 className="text-l ">add as much or little as you want</h1>
      </div>
    </div>
  );
};


export const AboutTheJob = ({ }) => {
// this section will ask questions about the job the user is applying for nad will ask thing linke the job title, level (entry intermediate, advanced) and the company name and the hiring manager name if they know it)
const [inputValues, setInputValues] = useState({ companyName: '', position: '', hiringManager: '' });

const handleInputChange = (value, content) => {
  setInputValues((prevInputValues) => ({
    ...prevInputValues,
    [content]: value
    
  }));
};

useEffect(() => {
  onQuestionAnswer(inputValues);
}
, [inputValues]);

return (
  <div className="flex w-100" style={{ height: '200px' }}>
    <div>
      <Question
        inputValue={inputValues.name}
        onInputChange={(value) => handleInputChange(value, 'companyName')}
        placeholder={"im a placeholder"}
        rows={1}
        orientation={"horizontal"}
        content={"companyName"}      
      />  
      <Question
        inputValue={inputValues.email}
        onInputChange={(value) => handleInputChange(value, 'position')}
        placeholder={"im a placeholder"}
        rows={1}
        orientation={"horizontal"}
        content={"position"}      
      />  
      <Question
        inputValue={inputValues.phoneNumber}
        onInputChange={(value) => handleInputChange(value, 'hiringManager')}
        placeholder={"im a placeholder"}
        rows={1}
        orientation={"horizontal"}
        content={"hiringManager"}      
      />  

<div className="inline-flex bg-white border rounded-md">
           <a
               href="#"
               className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
           >
               Option
           </a>

           <div className="relative">
               <button
                  type="button"
                  className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
               >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                      />
                  </svg>
               </button>

               <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                  <div className="p-2">
                      <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                      >
                          ReactJS Dropdown 1
                      </a>
                      <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                      >
                          ReactJS Dropdown 2
                      </a>
                      <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                      >
                          ReactJS Dropdown 3
                      </a>
                  </div>
               </div>
           </div>
       </div>

    </div>
      
    <div className="w-1/2 h-full bg-gray-300 border-solid border-2 border-black rounded-lg" style={{ flex: '3' }}>
      <h1 className="text-l ">add as much or little as you want</h1>
    </div>
  </div>
);
};

