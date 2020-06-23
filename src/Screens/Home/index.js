import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  Header,
  Avatar,
  Categories,
  CategoryName,
  Category,
} from './styles';
import Text from '../../components/Text';
import categoriesList from '../../mocks/categories';

export default Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <StatusBar backgroundColor='#343434' barStyle='light-content' />

      <Header>
        <Text large>
          Hello{' '}
          <Text large bold>
            Isaque Igor
          </Text>
          {`\n`}
          <Text large bold>
            Top Best Games in 2020
          </Text>
        </Text>

        <Avatar source={require('../../assets/avatar.png')} />
      </Header>

      <Categories horizontal={true} showHoriontalScrollIndicator={false}>
        {categoriesList.map((category, index) => {
          return (
            <Category key={index} onPress={() => changeCategory(category)}>
              <CategoryName
                selected={selectedCategory === category ? true : false}
              >
                {category}
              </CategoryName>
            </Category>
          );
        })}
      </Categories>
    </Container>
  );
};
