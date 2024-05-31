import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react";
function App() {

  const [userInput,setuserInput] = useState(
    {
        initialInvestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10,
    }
)

const inputIsValid=userInput.duration >= 1;
function HandleChange(inputIdentifier,newValue){
    setuserInput(prevUserInput=>{
        return{
            ...prevUserInput,[inputIdentifier] : +newValue
        }
    })
}
  
  return (
    <>
    <Header/>
    <UserInput onChange={HandleChange} userInput={userInput}/>
    {!inputIsValid && <p className="center">Please Enter Valid input data</p>}
{inputIsValid && <Results input={userInput}/>} 
    </>
     );
}

export default App
