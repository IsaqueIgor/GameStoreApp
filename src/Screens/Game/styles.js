import React from 'react';
import styled from 'styled-components';

import Text from '../../components/Text';

export const GameContainer = styled.ScrollView`
  flex: 1;
  background-color: #040617;
`;
export const GameArtContainer = styled.View`
  position: relative;
`;
export const GameArt = styled.Image`
  height: 350px;
  width: 100%;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
`;
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 28px;
  left: 26px;
`;

export const GameInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  margin: 8px 16px;
`;

//No secrets here, Just like in CSS
export const GameThumbContainer = styled.View`
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;

export const GameThumb = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;

export const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin: 0 8px 0 16px;
`;

export const Download = styled.View``;

export const GameStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;

export const Stars = styled.View`
  flex-direction: row;
`;

export const ScreenShotsTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 18px 16px;
`;

export const ScreenShotsContainer = styled.View`
  margin: 8px 0;
`;

export const ScreenShots = styled.ScrollView``;

export const ScreenShotContainer = styled.View`
  padding: 6px;
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
`;

export const ScreenShot = styled.Image`
  height: 200px;
  width: 300px;
  border-radius: 12px;
`;

export const Description = styled(Text)`
  margin: 0 16px;
  line-height: 22px;
  padding-bottom: 22px;
`;
