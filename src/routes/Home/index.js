import React, {useState, useCallback} from 'react';

// * modules

import {useSelector} from 'react-redux';

// * components

import Search from '../../components/Search';
import Title from './Title';
import ListBook from './ListBook';

import {View, Text} from 'react-native';

// * utils

import {updateFilterList} from '../../config/reducers/actions';

import {s} from './styles';

//

function Home({updateFilterText}) {
  const books = useSelector(state => state.bookReducer.books);

  //

  const [searchText, setSearchText] = useState('');
  const [booksFilter, setBooksFilter] = useState([]);

  // + get search value from input to update list
  const handleSearchValue = useCallback(
    value => {
      setSearchText(value);

      if (searchText && searchText.length > 1) {
        setBooksFilter(
          books.filter(book =>
            book.name.toLowerCase().includes(searchText.toLowerCase()),
          ),
        );
      } else {
        setBooksFilter([]);
      }
    },
    [searchText, books],
  );

  return (
    <View style={s.container}>
      <Search handleFunction={handleSearchValue} value={searchText} />
      <Title />
      <ListBook data={booksFilter.length > 0 ? booksFilter : books} />
    </View>
  );
}

//

export default Home;
// Desenvolvido por Hubert Ryan
