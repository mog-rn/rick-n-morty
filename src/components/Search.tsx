import React from "react";

const Search = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="space-x-5"
    >
      
      <button 
      // onClick={}
      className="h-12 rounded-lg border w-24 focus:border-gray-400 p-3 outline-none"
      >Search</button>
    </form>
  );
};

export default Search;
