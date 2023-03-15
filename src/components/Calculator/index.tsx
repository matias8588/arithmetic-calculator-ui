import React, { useState } from "react";

interface INewOperationFormProps {
  balance: number;
  setBalance: (balance: number) => void;
}

const NewOperationForm = ({ balance, setBalance }: INewOperationFormProps) => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [cost, setCost] = useState(1);

  const handleNum1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(event.target.value);
  };

  const handleOperationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOperation(event.target.value);
    switch (event.target.value) {
      case "+":
      case "-":
        setCost(1);
        break;
      case "*":
      case "/":
        setCost(2);
        break;
      case "sqrt":
        setCost(3);
        break;
      default:
        setCost(0);
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    // if (balance >= cost) {
    //   try {
    //     const response = await axios.post('/calculator', { num1: Number(num1), num2: Number(num2), operation });
    //     setBalance(balance - cost);
    //     alert(`Result: ${response.data.result}`);
    //   } catch (error) {
    //     alert(`Error: ${error.response.data}`);
    //   }
    // } else {
    //   alert('Insufficient balance');
    // }
    console.log("Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="num1">
          Number 1
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="num1"
          type="number"
          placeholder="Enter number 1"
          value={num1}
          onChange={handleNum1Change}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="num2">
          Number 2
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="num2"
          type="number"
          placeholder="Enter number 2"
          value={num2}
          onChange={handleNum2Change}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="operation"
        >
          Operation
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="operation"
          value={operation}
          onChange={handleOperationChange}
        >
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
          <option value="sqrt">Square Root (√)</option>
          <option value="rand">Random String (rand)</option>
        </select>
      </div>
      <div className="mb-4">
        <p className="block text-gray-700 font-bold mb-2">
          Cost per request: {cost} credit(s)
        </p>
      </div>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewOperationForm;
