// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#161617, #3c2940);
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`

export const Para = styled.p`
  font-family: 'Roboto';
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 100px;
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  background-color: aqua;
`
