import styled from 'styled-components'; 

export const BackgroundScene = styled.div`
  background-image: url(./images/${props => props.img}.jpg);
  height: 100vh;
  background-size: cover;
`
export const BackgroundWelcome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, rgba(251,148,63,1) 0%, rgba(252,70,107,1) 100%);
`
export const ButtonWelcome = styled.button`
  border-radius: 35px;  
  padding: 10px; 
  background-color: black;
  color: white; 
  margin-top: 10px; 

  &:hover {
    color: white;
    cursor: pointer;
    background-color: transparent; 
  }
`

export const Border = styled.div`
  padding-top: 5px;
  padding-bottom: 5px; 
  margin: 15px; 
  border: solid 2px; 
  border-radius: 35px; 
  border-color: black;  
  text-align: center;
  background-color: ${props => props.color ? '#EF9F9F' : 'white'};
`; 


export const Button = styled.button`
  width: 50%;
  padding: 30px;
  font-size: 18px;
  margin-top: 5px; 

  &:hover {
    cursor: pointer;
    background-color: white; 
`

export const WelcomeDiv = styled.div`
  padding-top: 5px;
  padding-bottom: 5px; 
  margin: 15px; 
  border: solid 2px; 
  border-radius: 35px; 
  border-color: black;  
  text-align: center;
`
