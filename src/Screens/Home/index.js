import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  Header,
  Avatar,
  Categories,
  Games,
  GameCover,
  GameInfo,
  GameImage,
  Game,
  GameTitle,
  CategoryName,
  Category,
  CategoryDot,
} from './styles';
import Text from '../../components/Text';
import categoriesList from '../../mocks/categories';

import games from '../../mocks/games';

export default Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  //const [games, setGames] = useState([]);
  const gamesRef = useRef();

  //   let config = {
  //     headers: {
  //       Accept: 'application/json',
  //       'user-key': 'fef5de8a40813da2b9cbe65efd5d4b7d',
  //     },
  //     timeout: 500,
  //     params: {
  //       'fields name, cover.url,rating,created_at,genres;limit 15; where rating > 9;'
  //     }
  //   };

  //   useEffect(() => {
  //     axios
  //       .get('https://api-v3.igdb.com/games', config)
  //       .then((resp) => {
  //         console.log(resp.data.name);
  //         setGames(resp.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });

  const changeCategory = (category) => {
    gamesRef.current.scrollToOffset({ x: 0, y: 0 });
    setSelectedCategory(category);
  };

  const GameItem = (game) => {
    return (
      <Game onPress={() => navigation.navigate('Game', { game: game })}>
        <GameCover source={game.cover} />
        <GameInfo backgroundColor={game.backgroundColor}>
          <GameImage source={game.cover} />
          <GameTitle>
            <Text medium bold>
              {game.title}
            </Text>
            <Text small>{game.teaser}</Text>
          </GameTitle>
        </GameInfo>
        <Text>{game.name}</Text>
      </Game>
    );
  };

  return (
    <Container>
      <StatusBar backgroundColor='#040617' barStyle='light-content' />
      <Header>
        <Text large>
          Hello, <Text large>Isaque</Text>
          {`\n`}
          <Text>Top Best Games for you</Text>
        </Text>

        <Avatar
          onPress={() => navigation.navigate('Profile')}
          source={require('../../assets/avatar.png')}
        />
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

      <Games
        data={games.filter(
          (game) =>
            game.category.includes(selectedCategory) ||
            selectedCategory === 'All'
        )}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => GameItem(item)}
        ref={gamesRef}
      />
    </Container>
  );
};
