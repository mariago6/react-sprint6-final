import React from 'react';
import Datas from '../Datas';
import Scene from './scene/Scene'; 
import {Border, Button, BackgroundScene} from '../styled';
import Buttons from './Buttons'

export default function AllScreen() {
  const [counter, setCounter] = React.useState(0); 

  function buttonBefore() {
    setCounter(prevCounter => prevCounter === 0 ? Datas.length : prevCounter - 1);
  }

  function buttonAfter() {
    setCounter(prevCounter => prevCounter > Datas.length ? 1 : prevCounter + 1); 
  }

  const newData = Datas.map((data, index) => {
    return (
      <Border key={index + 1} color={index + 1 === counter ? 1 : 0}>
        <Scene 
          quote={data.quote}
        />
      </Border>
    )
  }); 

  return (
    <BackgroundScene img={counter}>
      <Button><Buttons buttonFunction={buttonBefore} textButton='Anterior'/></Button>
      <Button><Buttons buttonFunction={buttonAfter} textButton='Siguiente'/> </Button>
      {newData}
    </BackgroundScene>
  )

}