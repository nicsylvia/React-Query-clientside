import React from 'react'
import styled from 'styled-components';

const Form = () => {
  return (
    <div>
        <Container>
        <div>
        <input type="text" placeholder='Enter post tittle' />
        <br />
        <br />
        <input type="text" placeholder='Describe your post' />
        <br /><br />
        <button>Upload Post</button>
        <br />
        <br />
        </div>
        
        <Div>
          <h1>VIEW POST</h1>
        <Card></Card>
        </Div>
        </Container>
    </div>
  )
}

export default Form;

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  input{
    width: 300px;
    height: 30px;
  }
  button{
    width: 200px;
    height: 40px;
    border-radius: 10px;
    color: white;
    background-color: purple;
    outline: purple;
    border: 2px solid purple;
    border-color: purple;
  }
`;
const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Card = styled.div`
  width: 400px;
  height: 400px;
  background-color: purple;
  margin: 20px;
  /* padding: 10px; */
`;