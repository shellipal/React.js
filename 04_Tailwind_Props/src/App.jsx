import React, { useState } from "react";
import Cards from "./Components/cards";

const App = () => {
  const [Count, setCount] = useState(0);

  // let myObj = {
  //   username: "Shelli",
  //   age: 20,
  // };
  // let newArr = [1, 2, 3];

  const data = [
    {
      developerName: "Shelli",
      age: 20,
    },
    {
      developerName: "Ashish",
      age: 22,
    },
  ];

  return (
    <div>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      {data.map((item) => {
        return (
          <Cards
            key={item.developerName}
            developerName={item.developerName}
            age={item.age}
          />
        );
      })}
    </div>
  );
};

export default App;
