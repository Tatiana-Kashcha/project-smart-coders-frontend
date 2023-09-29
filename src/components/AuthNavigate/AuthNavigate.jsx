import React from 'react';
import { NavLink } from 'react-router-dom';
import * as s from './AuthNavigate.styled';

export const AuthNavigate = ({ route, text }) => {
  return (
    <s.Text>
      <NavLink to={route}>{text}</NavLink>
    </s.Text>
  );
};

//Ghbdsn
