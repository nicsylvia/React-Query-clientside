import React from 'react'
import { useRoutes } from 'react-router-dom';
import MakeApost from "../Practice/MakeApost"

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/make-a-post",
            element: <MakeApost />
        }
    ]) 
    
    return element
}

export default AllRoutes