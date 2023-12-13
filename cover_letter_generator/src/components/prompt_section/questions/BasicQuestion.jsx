// i need to make a component that takes in a question and has a text input for the user to answer the question, i need to be able to put in an orientation, a required boolean, a line count a inputvalue and a oninputchange function and a default value and a placeholder value
// this will serve as a template for all the questions that i will have in the prompt section


export const Question = ({ content, type, placeholder, inputValue, onInputChange, rows, orientation }) => {

        return (
            
            <div>
            <div className=" bg-gray-300 border-solid border-2 border-black rounded-lg ">
            <h1 className="">{content}</h1>
            </div>
                <textarea 
                className={`form-input text-black border-solid border-2 border-black rounded-lg`}
                rows={rows}
                type={type}
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                placeholder={placeholder}
                />
            </div>
        
        )
    }