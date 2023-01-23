import React from 'react';
import Container from '@mui/material/Container';
import {createBrowserRouter,RouterProvider} from "react-router-dom";


import Home from './Home' ;
import Grants from './Grants' ;
import Teams from './Teams' ;
import Applications from './Applications' ;
import Deliveries from './Deliveries' ;
import Stats from './Stats' ;
import Links from './Links' ;


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "grants",
    element: <Grants />,
  },
  {
    path: "teams",
    element: <Teams />,
  },
  {
    path: "applications",
    element: <Applications />,
  },
  {
    path: "deliveries",
    element: <Deliveries />,
  },
  {
    path: "stats",
    element: <Stats />,
  },
  {
    path: "links",
    element: <Links />,
  },
]);


export default class Main extends React.Component {

  render() {
      return (
        <Container style={{marginTop:'20px'}}>
            <RouterProvider router={router} />
        </Container>
      );
    }
}