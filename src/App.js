import React from 'react';
import Scene from './components/scene/Scene'; 
import Datas from './Datas'; 
import {Border, Button} from './styled';
import Buttons from './components/Buttons'

export default function App() {
  const [counter, setCounter] = React.useState(0);  

  function buttonBefore() {
    setCounter(prevCounter => prevCounter === 0 ? Datas.length : prevCounter - 1);
  }

  function buttonAfter() {
    setCounter(prevCounter => prevCounter > Datas.length ? 1 : prevCounter + 1); 
  }

  const newData = Datas.map((data, index) => {
    return (
      <div>
        <Border key={index + 1} color={index + 1 === counter}>
        <Scene 
          quote={data.quote}
        />
      </Border>
      </div>
      
    )
  }); 
  return(
    <div>
      <Button><Buttons buttonFunction={buttonBefore} textButton='Anterior'/></Button>
      <Button><Buttons buttonFunction={buttonAfter} textButton='Siguiente'/> </Button>
      {newData}
    </div>
  )
}
