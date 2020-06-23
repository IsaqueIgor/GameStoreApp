import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`;

export const Header = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 50px;
`;

export const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`;
export const Category = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px;
  height: 32px;
`;
export const CategoryName = styled.Text`
  color: ${(props) => (props.selected ? '#819ee5' : '#9c9c9c')};
  font-weight: ${(props) => (props.selected ? '700' : '500')};
`;
