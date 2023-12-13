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
