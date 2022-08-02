import React from 'react'

export default function Buttons(props) {
  return(
    <div onClick={props.buttonFunction}>{props.textButton}</div>
  )
}



