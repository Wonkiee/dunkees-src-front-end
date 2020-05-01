import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { getJwtToken } from '../../utils/storage';

const PrivateRoute = ({ component:Component, ...rest }) => (
    <Route { ...rest }   render={ (props) => (
        !!getJwtToken() ? <Component { ...props } />
        : <Redirect to='/' />
    ) } />
  );
export default withRouter(PrivateRoute);