import React, {useCallback, useState} from 'react';

// * modules

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// * components

import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

// * utils

import {updateListBooks} from '../../config/reducers/actions';

import {s} from './styles';

//

function NewBook({navigation, updateList}) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  //

  function handleInputValue(value, current) {
    if (current === 'name') {
      setName(value);
    } else if (current === 'author') {
      setAuthor(value);
    } else {
      setDescription(value);
    }
  }

  function addNewBook() {
    if (
      name?.length > 0 &&
      name?.length <= 100 &&
      author?.length > 0 &&
      author?.length <= 50 &&
      description?.length > 0 &&
      description?.length <= 3000
    ) {
      updateList({
        name,
        author,
        description,
        image: null,
      });

      ToastAndroid.show(
        'Novo livro adicionado em sua lista!',
        ToastAndroid.SHORT,
      );

      navigation.navigate('Home');
      clearStates();
    } else if (name?.length > 100) {
      ToastAndroid.show('Nome do livro muito longo!', ToastAndroid.SHORT);
    } else if (author?.length > 50) {
      ToastAndroid.show(
        'Nome do author do livro muito longo!',
        ToastAndroid.SHORT,
      );
    } else if (description?.length > 3000) {
      ToastAndroid.show('Descrição do livro muito longo!', ToastAndroid.SHORT);
    }
  }

  const clearStates = useCallback(() => {
    setName('');
    setAuthor('');
    setDescription('');
  }, []);

  return (
    <View style={s.container}>
      <Text style={s.title}>Add a new book</Text>
      <ScrollView
        style={s.inputsContainer}
        showsVerticalScrollIndicator={false}>
        <View style={s.inputItemContainer}>
          <Text style={s.inputName}>Name</Text>
          <TextInput
            style={s.inputItem}
            placeholder="Book name"
            placeholderTextColor="#bbb"
            value={name}
            onChangeText={Text => handleInputValue(Text, 'name')}
          />
        </View>
        <View style={s.inputItemContainer}>
          <Text style={s.inputName}>Author</Text>
          <TextInput
            style={s.inputItem}
            placeholder="Author name"
            placeholderTextColor="#bbb"
            value={author}
            onChangeText={Text => handleInputValue(Text, 'author')}
          />
        </View>
        <View style={s.inputItemContainer}>
          <Text style={s.inputName}>Description</Text>
          <TextInput
            style={s.inputItemDescription}
            placeholderTextColor="#bbb"
            value={description}
            onChangeText={Text => handleInputValue(Text, 'description')}
            multiline
            numberOfLines={10}
          />
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => addNewBook()}>
        <View style={s.buttonContainer}>
          <Text style={s.buttonText}>Add new book</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({updateList: updateListBooks}, dispatch),
});

export default connect(null, mapDispatchToProps)(NewBook);
// Desenvolvido por Hubert Ryan
