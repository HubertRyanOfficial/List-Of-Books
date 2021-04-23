import React from 'react';

// * modules

import {Ionicons} from '@expo/vector-icons';

// * components

import {View, TouchableOpacity, Image} from 'react-native';

// * utils

import ReadBackgroundImg from '../../assets/read_background.png';

import {s} from './styles';

//

function Header({navigation, data}) {
  return (
    <View style={s.headerContainer}>
      <TouchableOpacity onPress={() => navigation()}>
        <Ionicons name="arrow-back" size={30} />
      </TouchableOpacity>
      <View
        style={[
          s.bookBackground,
          {
            backgroundColor: data.image ? null : '#eee',
            justifyContent: data.image ? 'flex-start' : 'center',
            alignItems: data.image ? 'flex-start' : 'center',
          },
        ]}>
        {data.image && <Image source={data.image} style={s.imageIcon} />}
        {!data.image && <Ionicons name="book" color="#fff" size={30} />}
      </View>
      <Image source={ReadBackgroundImg} style={s.headerBackground} />
    </View>
  );
}

export default Header;
// Desenvolvido por Hubert Ryan
