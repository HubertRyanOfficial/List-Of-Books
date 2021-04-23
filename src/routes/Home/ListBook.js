import React, {memo} from 'react';

// * modules

// * components

import Book from '../../components/Book';

import {FlatList, View} from 'react-native';

// * utils

import {s} from './styles';

//

function ListBook({data}) {
  return (
    <FlatList
      style={s.bookListContainer}
      data={data}
      renderItem={({item}) => <Book data={item} />}
      keyExtractor={(item, index) => String(index)}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      windowSize={9}
      contentContainerStyle={{
        marginTop: 30,
      }}
    />
  );
}

export default memo(ListBook);
// Desenvolvido por Hubert Ryan
