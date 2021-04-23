import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#FFF6E5',
    height: 230,
    borderBottomRightRadius: 100,
    padding: 20,
  },
  headerBackground: {
    position: 'absolute',
    right: 0,
    top: -10,
  },
  bookBackground: {
    padding: 10,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    alignSelf: 'center',
    width: 100,
  },
  bookInfoContainer: {
    padding: 20,
    marginBottom: 100,
  },
  bookName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bookAuthor: {
    color: '#FF6978',
    fontSize: 18,
  },
  bookDescription: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'justify',
    color: '#797979',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    zIndex: 1,
    paddingHorizontal: 50,
  },
  optionsBox: {
    backgroundColor: '#fff',
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  optionsName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F4043',
    marginLeft: 10,
  },
});

// Desenvolvido por Hubert Ryan
