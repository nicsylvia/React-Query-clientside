import React from 'react'
import styled from 'styled-components';
import { GetAll } from '../API/Api';
import { useQuery } from '@tanstack/react-query';

const Form = () => {

  const FetchData = useQuery({
    queryKey: ["AllPosts"],
    queryFn: GetAll
  });

  console.log('====================================');
  console.log(FetchData);
  console.log('====================================');
  return (
    <div>
        <Container>
        <input type="text" placeholder='Enter post tittle' />
        <br />
        <input type="text" placeholder='Describe your post' />
        <br />
        <button>Upload Post</button>
        
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
  margin-top: 50px;
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