import React, { useState } from 'react'
import styled from 'styled-components';
import { GetAll, CreatePost } from '../API/Api';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { Circles } from 'react-loader-spinner';

const Form = () => {

  const queryClient = useQueryClient();

  // To read from our api endpoints
  const FetchData = useQuery({
    queryKey: ["AllPosts"],
    queryFn: GetAll
  });

  // To write to or create post, we use mutation
  const PostData = useMutation({
    mutationFn: CreatePost,
    onSuccess: (data) =>{
      queryClient.invalidateQueries(["AllPosts"])
    }
  });

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const creatingPost = () =>{
    PostData.mutate({
      title,
      description
    })
  }

  // For loading :
  <Circles
  height="100"
  width="100"
  color="#e62ccd"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

  return (
    <div>
        <Container>
          <h1>Add Post</h1>
        <input type="text"
        onChange={(e) =>{
          setTitle(e.target.value)
        }}
        placeholder='Enter post tittle' />
        <br />
        <input type="text" 
        onChange={(e) =>{
          setDescription(e.target.value)
        }}
        placeholder='Describe your post' />
        <br />
        <button onClick={creatingPost}>Upload Post</button>

        <Div>
        <h1>VIEW POST</h1>
        <Hold>
          {
            FetchData?.isLoading ? <Circles /> : null
          }
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
  /* align-items: center; */
  /* justify-content: center; */
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
  width: 350px;
  padding: 10px;
  background-color: purple;
  margin: 20px;
  text-align: center;
  color: white;
`;