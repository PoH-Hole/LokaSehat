import React from 'react';

const Header = ({ user, onLogoutClick }) => {
  return (
    <header className="h-15 bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold italic">LokaSehat</h1>
      </div>
      {user ? (
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Halo, {user.name}</span>
          <button 
            className="bg-red-600 px-3 py-1 rounded-[9px] font-bold shadow-[0_0_5px_0.5px_rgba(0,0,0,0.5)]  hover:bg-red-700 transition-colors"
            onClick={onLogoutClick}
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition-colors">
          Log-in
        </button>
      )}
    </header>
  );
};

export default Header;