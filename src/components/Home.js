import React from "react";
import {name, city} from "../data/data.js";

// function Home() {
//   // update the JSX being returned!
//   return <div id="home">
//   <h1> {name} is a Web Developer from {city}</h1> 
//  <style color="firebrick"></style>
//   </div>
 

// }
function Home() {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <h1 
        style={{ color: 'firebrick' }}
        className="text-5xl font-bold text-center px-4 animate-fade-in"
      >
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}



export default Home;
