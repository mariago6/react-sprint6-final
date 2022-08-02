import styled from 'styled-components'; 

export const Border = styled.div`
  
  padding-top: 5px;
  padding-bottom: 5px; 
  margin: 15px; 
  border: solid 2px; 
  border-radius: 35px; 
  border-color: black;  
  text-align: center;
  background-color: ${props => props.color ? '#EF9F9F' : 'transparent'};
`; 


export const Button = styled.button`
  width: 50%;
  padding: 30px;
  font-size: 18px;
`
