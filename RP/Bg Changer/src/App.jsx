import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => {setColor("red")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "red"}}>Red</button>

          <button onClick={() => {setColor("green")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "green"}}>Green</button>

          <button onClick={() => {setColor("blue")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "blue"}}>Blue</button>

          <button onClick={() => {setColor("orange")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "orange"}}>Orange</button>

          <button onClick={() => {setColor("black")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "black"}}>Black</button>

          <button onClick={() => {setColor("magenta")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "magenta"}}>Magenta</button>

          <button onClick={() => {setColor("purple")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "purple"}}>Purple</button>

          <button onClick={() => {setColor("maroon")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "maroon"}}>Maroon</button>

          <button onClick={() => {setColor("teal")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "teal"}}>Teal</button>

          <button onClick={() => {setColor("pink")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "pink"}}>Pink</button>

          <button onClick={() => {setColor("gray")}} className="px-4 py-1 rounded-full text-white shadow-xl cursor-pointer" style={{backgroundColor: "gray"}}>Gray</button>

        </div>
      </div>

    </div>
  )
}

export default App
