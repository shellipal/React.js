import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook....
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrestuvwxyz";
    if (numAllow) {
      str = str + "0123456789";
    }
    if (charAllow) {
      str = str + "!@#$%^&*()_-=+[]{}~`";
    }

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <div className="w-full mx-auto h-screen flex justify-center items-center ">
      <div
        className="w-2xl mx-auto shadow-md
      rounded-lg px-4 py-10 my-8 text-orange-500 bg-[#12073a]"
      >
        <h1 className="text-white text-center my-3 text-4xl font-bold">
          Password Generator
        </h1>
        <div className="flex shadow bg-white rounded-lg overflow-hidden my-8">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-3 py-2 text-2xl font-semibold"
            placeholder="Password..."
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 font-semibold text-2xl shrink-0 hover:bg-blue-600 cursor-pointer"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="" className="text-lg font-semibold">
              Length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-lg font-semibold">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput" className="text-lg font-semibold">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
