import React from 'react';
import { StatusBar } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import Text from '../../components/Text';
import {
  Container,
  Header,
  SearchContainer,
  Search,
  LiveGame,
  LiveGameBadge,
  LiveGameContainer,
  LiveGameOver,
  LiveGameTitle,
  LiveGames,
  LiveGamesTitle,
  PopularGame,
  PopularGameContainer,
  PopularGames,
  SearchIcon,
  SectionContainer,
} from './styles';

export default Live = () => {
  return (
    <Container>
      <StatusBar translucent backgroundColor='transparent' />

      <Header>
        <Text large bold>
          Streaming
        </Text>
        <SearchContainer>
          <Search
            placeholder='Search live streams or games...'
            placeholderTextColor='#838383'
          />
          <SearchIcon>
            <Entypo name='magnifying-glass' size={24} color='#838383' />
          </SearchIcon>
        </SearchContainer>
      </Header>

      <SectionContainer>
        <Text medium bold>
          Popular Games
        </Text>

        <PopularGames horizontal={true} showsHorizontalScrollIndicator={false}>
          {games.map((game, index) => {
            return (
              <PopularGameContainer key={index}>
                <PopularGame source={game.cover} />
              </PopularGameContainer>
            );
          })}
        </PopularGames>
      </SectionContainer>

      <SectionContainer>
        <LiveGamesTitle>
          <Text medium bold>
            Live Now
          </Text>
          <Text bold color='#819ee5'>
            View all
          </Text>
        </LiveGamesTitle>
      </SectionContainer>

      <LiveGames
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <LiveGameContainer>
            <LiveGame source={item.cover} />
            <LiveGameOver>
              <LiveGameTitle>
                <Text small bold>
                  {item.title}
                </Text>
              </LiveGameTitle>
              <LiveGameBadge>
                <Text small bold>
                  Live
                </Text>
                <Entypo name='rss' size={8} color='#FFF' />
              </LiveGameBadge>
            </LiveGameOver>
          </LiveGameContainer>
        )}
      />
    </Container>
  );
};
