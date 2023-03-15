import React from "react";

type HeaderProps = {
  onSignOut: () => void;
};

const Header: React.FC<HeaderProps> = ({ onSignOut }) => {
  return (
    <header className="bg-sky-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">Calculator App</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </header>
  );
};

export default Header;
