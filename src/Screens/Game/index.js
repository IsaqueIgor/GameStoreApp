import React from 'react';
import { StatusBar } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import {
  GameContainer,
  GameArtContainer,
  GameArt,
  BackButton,
  GameInfoContainer,
  GameThumbContainer,
  GameThumb,
  Download,
} from './styles';

import Text from '../../components/Text';

export default Game = ({ route, navigation }) => {
  const { games } = route.params;

  const renderStars = () => {
    let stars = [];

    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Icon
          key={s}
          name='ios-star'
          size={16}
          style={{ marginRight: 5 }}
          color={Math.floor(game.rating) >= s ? '#3C4FFF' : '#434958'}
        />
      );
    }

    return <Stars>{stars}</Stars>;
  };

  return (
    <GameContainer>
      <StatusBar backgroundColor='#040617' barStyle='light-content' />

      <GameArtContainer>
        <GameArt source={games.cover} />
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name='ios-close' size={42} color='#FFF' />
        </BackButton>
      </GameArtContainer>

      <GameInfoContainer>
        <GameThumbContainer>
          <GameThumb source={games.cover} />
        </GameThumbContainer>
        <GameInfo>
          <Text heavy medium>
            {game.title}
          </Text>
          <Text color='#9a9a9a'>{game.teaser}</Text>
        </GameInfo>
        <Download>
          <Ionicons name='md-cloud-download' size={24} color='#fff' />
        </Download>
      </GameInfoContainer>

      <GameStatsContainer>
        {renderStars()}
        <Text heavy color='#9a9a9a'>
          {game.rating}
        </Text>
        <Text bold color='#9a9a9a'>
          {game.category[0]}
        </Text>
        <Text bold color='#9a9a9a'>
          {game.age}
        </Text>
        <Text bold color='#9a9a9a'>
          Game of the day
        </Text>
      </GameStatsContainer>

      <Description medium color='#9a9a9a'>
        {game.description}
      </Description>
    </GameContainer>
  );
};
