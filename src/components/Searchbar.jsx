import { useState } from "react";

const Searchbar = (props) => {

  const [city, setCity] = useState("");

  const SubmitHnadler = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-6 sm:py-10">
      
      <form className="w-full max-w-xl" onSubmit={(e) =>{
        SubmitHnadler(e);
       if (city === "") {
        return;
          }

        props.fetchData(city);
      }}>
        <input
          className="h-10 w-full rounded px-4 outline-none border-2 bg-white border-white"
          type="text"
          placeholder="Search the City Weather"
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
         
        />
      </form>

    </div>
  );
};

export default Searchbar;