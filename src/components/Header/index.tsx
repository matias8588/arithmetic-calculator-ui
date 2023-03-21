import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type HeaderProps = {
  onSignOut: () => void;
};

const Header: React.FC<HeaderProps> = ({ onSignOut }) => {
  const auth = useSelector((state: any) => state.auth);
  return (
    <header className="bg-sky-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">
        <Link to={"/"}>Calculator App</Link>
      </h1>
      {auth?.user && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onSignOut}
        >
          Sign Out
        </button>
      )}
    </header>
  );
};

export default Header;
