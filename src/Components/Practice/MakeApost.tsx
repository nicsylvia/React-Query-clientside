import React from 'react'
import styled from 'styled-components';
import { GetAll, CreatePost } from '../API/Api';
import { useQuery, useMutation } from '@tanstack/react-query';

const Form = () => {

  // To read from our api endpoints
  const FetchData = useQuery({
    queryKey: ["AllPosts"],
    queryFn: GetAll
  });

  // To write to or create post, we use mutation
  const PostData = useMutation({
    mutationFn: CreatePost
  })

  return (
    <div>
        <Container>
          <h1>Add Post</h1>
        <input type="text" placeholder='Enter post tittle' />
        <br />
        <input type="text" placeholder='Describe your post' />
        <br />
        <button>Upload Post</button>

        <Div>
        <h1>VIEW POST</h1>
        <Hold>
        {
          FetchData?.data?.map((props: any) =>(
            <Card key={props._id}>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
            </Card>
          ))
        }
        </Hold>
        </Div>
        </Container>
    </div>
  )
}

export default Form;

const Hold = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
`;

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
    cursor: pointer;
  }
`;
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Card = styled.div`
  width: 400px;
  padding: 10px;
  background-color: purple;
  margin: 20px;
  text-align: center;
  color: white;
`;