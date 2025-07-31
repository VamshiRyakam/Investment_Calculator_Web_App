import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
function App() {
  const [userInput, setUserInput] =useState(
    {
      initialInvestment:10000,
      annualInvestment:1200,
      expectedReturn : 6,
      duration: 0,
    }
  );
  function handleChange(identifier,newValue){
  setUserInput(preValue => {
    return {
        ...preValue,
        [identifier]: +newValue,
      };
    });
  }
  const validInput = userInput.duration >=1;
  return (
  <>
    <Header />
    <UserInput onChange = {handleChange} userInput = {userInput} />
    {!validInput && <p className="center">Duration must be greater than 0</p>}
    {validInput && <Results input={userInput}/>}
  </>
  )
}

export default App
