import React, {useState} from 'react';

// * modules

import * as Speech from 'expo-speech';

// * components

import {ScrollView, View, Text, ToastAndroid} from 'react-native';

import Header from './Header';
import Options from './Options';
import BookInfo from './BookInfo';

// * utils

import {s} from './styles';

//

function ReadBook({navigation, route}) {
  const {data} = route.params;

  //

  const [listening, setListening] = useState(false);

  //

  function handleBackNavigation() {
    navigation.goBack();
  }

  // * listen description from book

  async function listenBook() {
    try {
      let listeningSpeech = await Speech.isSpeakingAsync();

      if (!listeningSpeech) {
        setListening(true);
        Speech.speak(data.description);
      } else {
        Speech.stop();
        setListening(false);
      }
    } catch (error) {
      ToastAndroid.show(
        'Não foi possível disponibilizar esta função no momento (Tente novamente).',
        ToastAndroid.SHORT,
      );
      setListening(false);
    }
  }

  // * stop listening

  async function stopListenToRead() {
    if (listening) setListening(false);
    let listeningSpeech = await Speech.isSpeakingAsync();
    if (listeningSpeech) Speech.stop();
  }

  return (
    <>
      <ScrollView style={s.container}>
        <Header data={data} navigation={handleBackNavigation} />
        <BookInfo data={data} />
      </ScrollView>
      <Options
        listenBook={listenBook}
        stopListenToRead={stopListenToRead}
        listening={listening}
      />
    </>
  );
}

export default ReadBook;
// Desenvolvido por Hubert Ryan
