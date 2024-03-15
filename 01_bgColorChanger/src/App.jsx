import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className="w-screen h-screen  text-white" style={ {backgroundColor : color}}> 
      <div id="colors" className=" bg-gray-400 flex flex-wrap justify-center items-center gap-x-10 w-3/5 h-11 rounded-lg absolute bottom-4 ml-60">
        <button onClick={()=> setColor('red')} className="py-1 px-5 rounded-lg font-semibold" style={{backgroundColor : 'red'}}>Red</button>
        <button onClick={()=> setColor('green')} className="py-1 px-5 rounded-lg font-semibold" style={{backgroundColor : 'green'}}>Green</button>
        <button onClick={()=> setColor('blue')} className="py-1 px-5 rounded-lg font-semibold" style={{backgroundColor : 'Blue'}}>Blue</button>
        <button onClick={()=> setColor('orange')}className="py-1 px-5 rounded-lg font-semibold text-black" style={{backgroundColor : 'Orange'}}>Orange</button>
        <button onClick={()=> setColor('black')} className="py-1 px-5 rounded-lg font-semibold" style={{backgroundColor : 'Black'}}>Black</button>
        
      </div>
      </div>
    </>
  )
}

export default App
