import React from 'react';
import Scene from '../src/components/scene/Scene'; 
import Data from './Data'; 
import {Border} from './styled'

export default function App() {
  const newData = Data.map(d => {
    return (
      <div> 
        <Border>
          <Scene 
            d={d}
          />
        </Border>
        
      </div>
      
    )
  }); 
  return(
    <div>
      {newData}
    </div>
  )
}
