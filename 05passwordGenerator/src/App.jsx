import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [isNumber, setIsNumber] = useState(false)
  const [isCharacter, setIsCharacter] = useState(false)
  const [password, setpassword] = useState()

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumber) str += '0123456789'
    if (isCharacter) str += '!@#$%^&*(){}[]~`'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char)
    }

    setpassword(pass);

  }, [length, isNumber, isCharacter, setpassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly/>
        </div>
      </div>

    </>
  )
}

export default App
