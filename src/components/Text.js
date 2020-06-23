import React from 'react';

import styled from 'styled-components/native';

export default TextStyle = ({ ...props }) => {
  return <Text {...props}>{props.children}</Text>;
};

const Text = styled.Text`
  color: ${(props) => props.color ?? '#FFF'};

  ${({ title, large, medium, small }) => {
    switch (true) {
      case title:
        return `font-size: 32px`;
      case large:
        return `font-size: 26px`;
      case medium:
        return `font-size: 16px`;
      case small:
        return `font-size: 13px`;

      default:
        return `font-size: 14px`;
    }
  }}

  ${({ light, bold, heavye }) => {
    switch (true) {
      case light:
        return `font-weight: 200`;
      case bold:
        return `font-weight: 600`;
      case heavye:
        return `font-weight: 700`;

      default:
        return `font-weight: 400`;
    }
  }}

   ${({ center, right }) => {
     switch (true) {
       case center:
         return `text-align: center`;
       case right:
         return `text-align: right`;

       default:
         return `text-align: center`;
     }
   }}
`;
