import React from 'react'
import {BackgroundWelcome, ButtonWelcome} from '../styled';


export default function Welcome(props) {
  return (
    <BackgroundWelcome>
      <h2> Benvinguts/des!</h2>
      <h4>Esteu convidats i convidades a gaudir d'aquesta gran història</h4>
      <p>Per poder navegar per ella clica el següent botó: </p>
      <ButtonWelcome onClick={props.startFunction}>Comença l'aventura</ButtonWelcome>
    </BackgroundWelcome>
  )
  

}