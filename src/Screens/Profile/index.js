import React from 'react';
import { StatusBar } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Text from '../../components/Text';
import {
  Container,
  Account,
  Avatar,
  AvatarContainer,
  Badge,
  Game,
  GameImage,
  Games,
  Info,
  Logout,
  Settings,
  Stat,
  Stats,
} from './styles';

import games from '../../mocks/games';

export default Profile = () => {
  return (
    <Container>
      <StatusBar translucent backgroundColor='transparent' />

      <Account>
        <Settings>
          <Entypo name='dots-three-horizontal' size={24} color='#ffffff' />
        </Settings>
        <Logout>
          <Text heavy>Logout</Text>
        </Logout>
      </Account>

      <AvatarContainer>
        <Avatar source={require('../../assets/avatar.png')} />
        <Text large bold>
          Isaque gor
        </Text>
      </AvatarContainer>

      <Badge>
        <Text small heavy>
          Pro Player
        </Text>
      </Badge>

      <Stats>
        <Stat>
          <Text large heavy>
            121 <Text color='#9a9a9a'>Games</Text>
          </Text>
        </Stat>

        <Stat>
          <Text large heavy>
            4 <Text color='#9a9a9a'>Purchases</Text>
          </Text>
        </Stat>
      </Stats>
      <Text center large>
        Purchased Games
      </Text>

      <Games
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Game>
            <GameImage source={item.cover} />
            <Info>
              <Text bold>{item.title}</Text>
              <Text small color='#9a9a9a'>
                {Math.floor(Math.random() * 1000) + 1} Sales
              </Text>
            </Info>
            <Text heavy color='#819ee5'>
              ${Math.floor(Math.random() * 50) + 1}
            </Text>
          </Game>
        )}
      />
    </Container>
  );
};
