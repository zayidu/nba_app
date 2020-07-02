import React from 'react';
import {View, Text, Image} from 'react-native';

import LogoImage from '../../assets/images/nba_login_logo.png';
const AuthLogo = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={LogoImage}
        resizeMode={'center'}
        style={{width: 170, height: 150}}
      />
    </View>
  );
};

export default AuthLogo;
