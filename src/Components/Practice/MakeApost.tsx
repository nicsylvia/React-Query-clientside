import React from 'react'
import styled from 'styled-components';

const Form = () => {
  return (
    <div>
        <Container>
        <input type="text" placeholder='Enter post tittle' />
        <br />
        <br />
        <input type="text" placeholder='Describe your post' />
        <br /><br />
        <button>Upload Post</button>
        <br />
        <br />
        <Card></Card>
        </Container>
    </div>
  )
}

export default Form;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: black;
  flex-direction: column;
  input{
    width: 300px;
    height: 30px;
  }
  button{
    width: 200px;
    height: 40px;
    border-radius: 10px;
    background-color: purple;
    outline: purple;
  }
`;
const Card = styled.div`
  width: 400px;
  background-color: purple;
  padding: 10px;
`;