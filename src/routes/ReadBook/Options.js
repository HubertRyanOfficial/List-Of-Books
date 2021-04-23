import React from 'react';

// * modules

import {Ionicons} from '@expo/vector-icons';

// * components

import {Text, TouchableOpacity, View} from 'react-native';

// * utils

import {s} from './styles';

//

function Options({stopListenToRead, listenBook, listening}) {
  return (
    <View style={s.optionsContainer}>
      <View style={s.optionsBox}>
        <TouchableOpacity onPress={() => stopListenToRead()}>
          <View style={s.optionItem}>
            <Ionicons name="book-outline" size={25} color="#ddd" />
            <Text style={s.optionsName}>Read</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => listenBook()}>
          <View style={s.optionItem}>
            <Ionicons
              name={`${!listening ? `headset-outline` : 'headset'}`}
              size={25}
              color="#ddd"
            />
            <Text style={s.optionsName}>{!listening ? 'Listen' : 'Stop'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={s.optionItem}>
            <Ionicons name="share-outline" size={25} color="#ddd" />
            <Text style={s.optionsName}>Share</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Options;
// Desenvolvido por Hubert Ryan
