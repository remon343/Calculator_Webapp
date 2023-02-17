import { useState } from "react";

function App() {
  //make a state for the expression changes that happen in input field
  const [expression, setExpression] = useState("");

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      try {
        setExpression(eval(expression));
      } catch (err) { 
        setExpression("Cannot evaluate it.");
      }
    }
  };

  return (
    <div className="h-screen bg-[url('https://images.pexels.com/photos/2261166/pexels-photo-2261166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center text-black flex flex-col justify-center items-center">
      <div className="bg-black px-8 rounded-lg py-3">
        <div className="text-center text-white text-2xl py-5 animate-pulse">
          Calculator App
        </div>

        <input
          type="text"
          value={expression}
          onChange={(event) => {
            setExpression(event.target.value);
          }}
          onKeyUp={handleEnter}
          className="border rounded-full border-blue-500 py-3 px-4 outline-none"
        />
        <div className="flex flex-col my-4 gap-4">
          <div className="row">
            <div
              onClick={() => {
                setExpression(expression + "1");
              }}
              className="number-button"
            >
              1
            </div>
            <div
              onClick={() => {
                setExpression(expression + "2");
              }}
              className="number-button"
            >
              2
            </div>
            <div
              onClick={() => {
                setExpression(expression + "3");
              }}
              className="number-button"
            >
              3
            </div>
            <div
              onClick={() => {
                setExpression(expression + "+");
              }}
              className="other-button"
            >
              +
            </div>
          </div>
          <div className="row">
            <div
              onClick={() => {
                setExpression(expression + "4");
              }}
              className="number-button"
            >
              4
            </div>
            <div
              onClick={() => {
                setExpression(expression + "5");
              }}
              className="number-button"
            >
              5
            </div>
            <div
              onClick={() => {
                setExpression(expression + "6");
              }}
              className="number-button"
            >
              6
            </div>
            <div
              onClick={() => {
                setExpression(expression + "-");
              }}
              className="other-button"
            >
              -
            </div>
          </div>
          <div className="row">
            <div
              onClick={() => {
                setExpression(expression + "7");
              }}
              className="number-button"
            >
              7
            </div>
            <div
              onClick={() => {
                setExpression(expression + "8");
              }}
              className="number-button"
            >
              8
            </div>
            <div
              onClick={() => {
                setExpression(expression + "9");
              }}
              className="number-button"
            >
              9
            </div>
            <div
              onClick={() => {
                setExpression(expression + "*");
              }}
              className="other-button"
            >
              *
            </div>
          </div>
          <div className="row">
            <div
              onClick={() => {
                setExpression(expression + "0");
              }}
              className="number-button"
            >
              0
            </div>
            <div
              onClick={() => {
                setExpression(expression + "00");
              }}
              className="number-button"
            >
              00
            </div>
            <div
              onClick={() => {
                setExpression(expression + "/");
              }}
              className="other-button"
            >
              /
            </div>
            <div
              onClick={() => {
                setExpression(expression.substring(0, expression.length - 1));
              }}
              className="delete-button"
            >
              D
            </div>
          </div>
          <div className="final-row">
            <div
              onClick={() => {
                setExpression("");
              }}
              className="final-row-button"
            >
              CLEAR
            </div>
            <div
              onClick={() => {
                setExpression(eval(expression));
              }}
              className="final-row-button equal-button"
            >
              =
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 text-2xl bg-blue-500 py-3 text-white w-screen flex justify-center">Copyright © By Manoj Shrestha</div>
    </div>
  );
}

export default App;
