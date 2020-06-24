import React from 'react';
import styled from 'styled-components';

export const Container = styled.View`
  background-color: #040617;
  flex: 1;
`;

export const AvatarContainer = styled.View`
  margin: 0 0 16px 0;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 16px;
`;

export const Badge = styled.View`
  background-color: #3c4fff;
  align-self: center;
  padding: 4px 12px;
  border-radius: 8px;
`;

export const Stats = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin: 32px 0;
`;

export const Stat = styled.View`
  margin: 0 16px;
`;

export const Games = styled.FlatList`
  margin: 32px 16px 0 16px;
`;

export const Game = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const GameImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 12px;
`;

export const Info = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const Account = styled.View`
  margin: 32px;
  justify-content: space-between;
  flex-direction: row;
`;

export const Settings = styled.TouchableOpacity`
  padding: 12px;
`;

export const Logout = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 26px;
`;
