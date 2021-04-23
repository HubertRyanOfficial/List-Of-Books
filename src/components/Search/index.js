import React, {memo} from 'react';

// * modules

import {Ionicons} from '@expo/vector-icons';

// * components

import {View, TextInput} from 'react-native';

// * utils

import {s} from './styles';

//

function Search({handleFunction, value}) {
  return (
    <View style={s.container}>
      <Ionicons name="search" color="#F0F0F0" size={20} />
      <TextInput
        value={value}
        onChangeText={handleFunction}
        placeholder="Search Book"
        placeholderTextColor="#54565A"
        style={s.input}
      />
    </View>
  );
}

export default memo(Search);
// Desenvolvido por Hubert Ryan
