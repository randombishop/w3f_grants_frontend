import React from 'react';
import Container from '@mui/material/Container';
import {createBrowserRouter,RouterProvider,useParams} from "react-router-dom";


import Home from './home/Home' ;
import Grants from './grants/Grants' ;
import GrantPage from './grants/GrantPage' ;
import Teams from './teams/Teams' ;
import Applications from './applications/Applications' ;
import Deliveries from './deliveries/Deliveries' ;
import Stats from './stats/Stats' ;
import Links from './links/Links' ;


function GrantPageWrapper() {
  let { id } = useParams();
  return <GrantPage fileName={id} /> ;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "grants",
    element: <Grants />
  },
  {
    path: "grants/:id",
    element: <GrantPageWrapper />
  },
  {
    path: "teams",
    element: <Teams />
  },
  {
    path: "applications",
    element: <Applications />
  },
  {
    path: "deliveries",
    element: <Deliveries />
  },
  {
    path: "stats",
    element: <Stats />
  },
  {
    path: "links",
    element: <Links />
  }
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