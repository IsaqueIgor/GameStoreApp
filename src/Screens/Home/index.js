import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StatusBar } from 'react-native';

import {
  Container,
  Header,
  Avatar,
  Categories,
  Games,
  CategoryName,
  Category,
  CategoryDot,
} from './styles';
import Text from '../../components/Text';
import categoriesList from '../../mocks/categories';

export default Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [games, setGames] = useState([]);

  let config = {
    headers: {
      Accept: 'application/json',
      'user-key': 'fef5de8a40813da2b9cbe65efd5d4b7d',
    },
    params: {
      fields:
        'name, cover.url,rating,created_at,genres;limit 15; where rating > 98; sort created_at asc',
    },
  };

  useEffect(() => {
    axios
      .get('https://api-v3.igdb.com/games', config)
      .then((resp) => {
        console.log(resp.data);
        setGames(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  const GameItem = (game) => {
    return (
      <Game>
        <Text>{game.name}</Text>
      </Game>
    );
  };

  return (
    <Container>
      <StatusBar backgroundColor='#343434' barStyle='light-content' />

      <Header>
        <Text large>Top Best Games in 2020</Text>

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
              {selectedCategory === category && <CategoryDot />}
            </Category>
          );
        })}
      </Categories>

      {/* <Games
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => GameItem(item)}
      /> */}
    </Container>
  );
};
