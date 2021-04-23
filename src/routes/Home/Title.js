import React, {memo} from 'react';

// * modules

// * components

import {View, Text} from 'react-native';

// * utils

import {s} from './styles';

//

function Title() {
  return (
    <Text style={s.title}>
      Hi,{' '}
      <Text
        style={{
          color: '#FF6978',
          fontWeight: 'bold',
        }}>
        Mehmed Al Fatih
      </Text>
      {'   '}
      👋
    </Text>
  );
}

export default memo(Title);
// Desenvolvido por Hubert Ryan
