import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/card';
function App() {
  const [count, setCount] = useState(0);
  let obj = {
    username : "Adhikari",
    age:30
  }
  let newArray = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-4">Tail Wind Css</h1>
      <Card name="sagar" btnText="Click Me"/>
      <Card name="visno" btnText="Visit Me"/>
    </>
  );
}

export default App;
