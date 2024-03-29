
import NaturalNumberInput from "./NaturalNumberInput";
import CalculationResult from "./CalculationResult";
import { useState, useEffect } from "react";
import { Fibonacci } from "./fibonacci";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [previousSearchValues, setPreviousSearchValues] =  useState([]);
  const [result, setResult] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading || inputValue === "") return;
    function handleCalculateButtonClick() {
      setResult(Fibonacci(inputValue));
      setIsLoading(false);
    }
    handleCalculateButtonClick();
  }, [isLoading, inputValue]);
  useEffect(()=>{
    const apiUrl = '/api/';
    const publicIp = require("react-public-ip");
    (async () => {
        const ipv4 = await publicIp.v4() || "";
        fetch(apiUrl+'read/'+ipv4.split('.').join(''))
        .then(async response => {
            const data = await response.json();
            setPreviousSearchValues(data.data.split('+'));
            console.log(previousSearchValues);
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    })();
    
  }, [result]);
  return (
    <div className="App-background">
      <div className="App-container column">
        <div className="column horizontal-center content">
          <h1>Fibonacci Calculator</h1>
          <NaturalNumberInput
            value={inputValue}
            setValue={setInputValue}
            setResult={setResult}
          />
          <button
            className="calculate-fibonacci-button"
            onClick={(e) => {
              if (inputValue !== "") setIsLoading(true);
            }}
          >
            Calculate Fibonacci
          </button>
          <CalculationResult result={result} isLoading={isLoading} />
          {previousSearchValues.length > 0 ? 
            <div>
              <h1>History</h1>
              <span>Previous searches:</span>
              <ul>
                {previousSearchValues.map((previousSearchValue) =>
                  <li key={previousSearchValue.toString()}>
                    {previousSearchValue}
                  </li>
                )}
              </ul>
            </div> 
            :
          <div>
            No previous searches yet...  
          </div>}
        </div>
      </div>
    </div>
  );
}
