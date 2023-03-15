import React from "react";
import Calculator from "../../components/Calculator";

const NewOperation = () => {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Calculator balance={10} setBalance={() => console.log()}></Calculator>
    </div>
  );
};

export default NewOperation;
