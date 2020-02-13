import React from 'react';

/* Styled components */
import styled from 'styled-components';

const StyleSideNav = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #e9ecef;
  border-radius: .25rem;

  a {
    padding: 13px 0px 13px 13px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;

    &:hover {
      background-color: #adb3b9;
    }
  }
`;

export const SideNav = () => (
  <StyleSideNav>
    <a href="/">Section</a>
    <a href="/">Section</a>
    <a href="/">Section</a>
    <a href="/">Section</a>
  </StyleSideNav>
);
