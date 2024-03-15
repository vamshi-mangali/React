import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numsAllowed) str += "0123456789";
    if(charsAllowed) str += '!@#$%&*-/+';
    if(length < 8) length = 8;

    for(let i=0; i<length; i++){
      let ind = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ind);
    }
    setPassword(pass);

  }, [length, numsAllowed, charsAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() =>{
    passwordGenerator();
  }, [length, numsAllowed, charsAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-xl shadow-md rounded-lg p-8 my-24 mx-auto  bg-gray-600 text-white text-center">
        <h1 className='text-2xl font-bold '>Password Genrator</h1>
        <div className='flex gap-1 my-5'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full rounded-lg py-1 px-5 text-black text-xl'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            
          <button  onClick={copyPasswordToClipboard}
          className='bg-blue-800 px-4 py-1 text-lg font-semibold rounded-lg' >Copy</button>
        </div>

        <div className='flex text-md gap-x-5'>
          <div className='flex gap-x-1'>
            <input type="range" 
              min={8} max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex gap-x-1'>
            <input type="checkbox" 
              defaultChecked = {numsAllowed}
              id='numInput'
              onChange={() => {
                setNumsAllowed( (prev) => !prev)}}
            />
            <label> NumsAllowed</label>
          </div>

          <div className='flex gap-x-1'>
            <input type="checkbox" 
              defaultChecked = {charsAllowed}
              id='charInput'
              onChange={() => {
                setCharsAllowed( (prev) => !prev)}}
            />
            <label> NumsAllowed</label>
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default App
