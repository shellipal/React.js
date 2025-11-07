import { useState } from "react";

const colors = [
  { name: "Red" },
  { name: "Green" },
  { name: "Blue" },
  { name: "Yellow" },
  { name: "Violet" },
  { name: "Hotpink" },
  { name: "Aqua" },
];
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setColor(color.name)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer bg-blend-multiply"
              style={{ backgroundColor: color.name }}
            >
              {color.name}
            </button>
          ))}
          {/* <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("Hotpink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "Hotpink" }}
          >
            Hot Pink
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("Aqua")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Aqua" }}
          >
            Aqua
          </button>
          <button
            onClick={() => setColor("Gold")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Gold" }}
          >
            Gold
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
