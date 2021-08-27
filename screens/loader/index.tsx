import React, { FC } from "react";
import { View, ActivityIndicator } from "react-native";

import { LoaderPropType } from '../../common/proptypes';
import { LoaderContainer } from './styles';

const LoadingIndicator: FC<LoaderPropType> = ({ isVisible, position }) => {
  return isVisible ? (
    <LoaderContainer position={position}>
      <ActivityIndicator size="large" color="#FFFFFF" />
    </LoaderContainer>
  ) :
    (<View />)
};

export default LoadingIndicator;