import React from 'react';

// * modules

// * components

import {View, Text} from 'react-native';

// * utils

import {s} from './styles';

//

function BookInfo({data}) {
  return (
    <View style={s.bookInfoContainer}>
      <Text style={s.bookName}>{data.name}</Text>
      <Text style={s.bookAuthor}>{data.author}</Text>
      <Text style={s.bookDescription}>{data.description}</Text>
    </View>
  );
}

export default BookInfo;
// Desenvolvido por Hubert Ryan
