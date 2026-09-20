import { useState } from "react";
import BlueSky from "./images/blue.jpg";
import Searchbar from "./components/Searchbar";
import Display from "./components/Display";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchData = async (city) => {
    // New request start → purana error hata do
    setError(null);
    setLoading(true)

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      );

      // API successful → purana data replace karo
      setData(response.data);

      // Agar pehle koi error tha to hata do
      setError(null);
     
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);

      // API fail → purana weather data hata do
      setData(null);

      // Error state mein error object save karo
      setError(error);
     
      
    } finally {
      setLoading(false)
    }
  };

  return (
    <div
    className="min-h-screen w-full bg-cover bg-center bg-fixed bg-blue-400"
    style={{ backgroundImage: `url(${BlueSky})` }}
>
      <Searchbar fetchData={fetchData} />

      {data && <Display data={data} />}

      {error && <p className="px-4 text-center text-lg text-red-500 sm:text-2xl">{error.message}</p>}
      {loading === true && <p className="text-center">Loading...</p> }
    </div>
  );
};

export default App;