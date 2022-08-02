import React from 'react';
import Welcome from './components/Welcome';
import AllScreen from './components/AllScreen';

export default function App() {  
  const [active, setActive] = React.useState(true); 
  function startFunction() {
    setActive(prevAct => !prevAct)
  }

  return(
    <div>
      {active ? <Welcome startFunction={startFunction}/> : <AllScreen />}
    </div>
  )
}
