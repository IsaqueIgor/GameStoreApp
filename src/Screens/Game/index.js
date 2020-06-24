import React from 'react';
import { StatusBar } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import {
  GameContainer,
  GameArtContainer,
  GameArt,
  GameInfo,
  Description,
  GameStatsContainer,
  ScreenShot,
  ScreenShotContainer,
  ScreenShots,
  ScreenShotsContainer,
  Stars,
  ScreenShotsTitle,
  BackButton,
  GameInfoContainer,
  GameThumbContainer,
  GameThumb,
  Download,
} from './styles';

import Text from '../../components/Text';

export default Game = ({ route, navigation }) => {
  const { game } = route.params;

  const renderStars = () => {
    let stars = [];

    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Ionicons
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
    <>
      <StatusBar translucent backgroundColor='transparent' />
      <GameContainer>
        <GameArtContainer>
          <GameArt source={game.cover} />
          <BackButton onPress={() => navigation.goBack()}>
            <Ionicons name='ios-close' size={48} color='#FFF' />
          </BackButton>
        </GameArtContainer>

        <GameInfoContainer>
          <GameThumbContainer>
            <GameThumb source={game.cover} />
          </GameThumbContainer>
          <GameInfo>
            <Text heavy medium>
              {game.title}
            </Text>
            <Text color='#9a9a9a'>{game.teaser}</Text>
          </GameInfo>
          <Download onPress={() => {}}>
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

        <ScreenShotsTitle>
          <Text heavy medium>
            Screenshots
          </Text>
        </ScreenShotsTitle>

        <ScreenShotsContainer>
          <ScreenShots horizontal={true} showsHorizontalScrollIndicator={false}>
            {game.screenshots.map((screenshot, index) => {
              return (
                <ScreenShotContainer key={index}>
                  <ScreenShot source={screenshot} />
                </ScreenShotContainer>
              );
            })}
          </ScreenShots>
        </ScreenShotsContainer>

        <Description medium color='#9a9a9a'>
          {game.description}
        </Description>
      </GameContainer>
    </>
  );
};
