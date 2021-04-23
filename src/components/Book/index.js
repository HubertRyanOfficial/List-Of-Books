import React from 'react';

// * modules

import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

// * components

import {Text, View, TouchableOpacity, Image} from 'react-native';

// * utils

import {s} from './styles';

//

function Book({data}) {
  const navigation = useNavigation();

  // * get images random

  return (
    <TouchableOpacity
      style={s.container}
      onPress={() => navigation.navigate('ReadBook', {data})}>
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
      <View style={s.bookInfo}>
        <Text style={s.bookInfoName}>{data.name}</Text>
        <Text style={s.bookInfoAuthor}>by {data.author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Book;
// Desenvolvido por Hubert Ryan
