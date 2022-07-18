import React from 'react'
import Scene from '../src/components/scene/Scene'
import Data from './Data'

export default function App() {
  const newData = Data.map(d => {
    return (
      <Scene 
        d={d}
      />
    )
  })
  return(
    <div>
      {newData}
    </div>
  )
}
