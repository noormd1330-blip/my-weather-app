import { Icon } from '@iconify/react';

const Display = (props) => {

 let weatherIcon = null;

  if (props.data.weather[0].main === "Clear") {
  
  weatherIcon = <Icon className="h-28 w-56 sm:h-32 sm:w-72 md:h-40 md:w-80" icon="noto:sun" />;
}
else if (props.data.weather[0].main === "Rain") {
  weatherIcon = <Icon className="h-28 w-56 sm:h-32 sm:w-72 md:h-40 md:w-80" icon="noto:cloud-with-lightning-and-rain" />;
}
else if (props.data.weather[0].main === "Clouds") {
  weatherIcon = <Icon className="h-28 w-56 sm:h-32 sm:w-72 md:h-40 md:w-80" icon="noto:cloud" />;
}
  
  return (
<div className="mx-auto my-10 flex min-h-120 w-[calc(100%-2rem)] max-w-4xl flex-col items-center justify-center gap-4 rounded-3xl border border-white/30 bg-white/10 p-5 backdrop-blur-md sm:w-[calc(100%-4rem)] sm:p-8 md:h-105 md:min-h-0 md:flex-row md:gap-10 md:p-10">
      {weatherIcon}
      
      <div className="flex min-w-0 items-center gap-6">
   
        <div className="flex min-w-0 flex-col items-center text-black">
          <h2 className="text-2xl font-normal">Today</h2>
          <h3 className="max-w-full text-center text-4xl font-bold sm:text-5xl">{props.data.name}</h3>
          <span className="text-2xl font-normal">{props.data.main.temp}°C</span>
          <span className="text-2xl font-normal">{props.data.weather[0].main}</span>
        </div>
      </div>
    </div>
  );
};
export default Display;