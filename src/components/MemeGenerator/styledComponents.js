// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
`
export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding-left: 60px;
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: 800;
  align-self: flex-start;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 20px;
  align-self: flex-start;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 8px;
`

export const Input = styled.input`
  color: #5a7184;
  font-size: 20px;
  padding: 8px;
  padding-left: 13px;
  align-self: flex-start;
  margin-bottom: 20px;
`

export const Select = styled.select`
  align-self: flex-start;
  font-size: 20px;
  width: 40%;
  outline: none;
  padding: 10px;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  align-self: flex-start;
  color: #ffffff;
  margin-top: 20px;
  border: none;
  cursor: pointer;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${props => props.url});
  background-size: cover;
  width: 100%;
  height: 100vh;
`

export const Text = styled.h1`
  color: #ffffff;
  font-weight: 800;
  font-family: 'Roboto';
  font-size: ${props => props.size};
`
