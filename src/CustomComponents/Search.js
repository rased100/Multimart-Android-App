import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';

const searchIcon = <Icon name="search" size={16} color="#222222" />;
const micIcon = <FeatherIcon name="mic" size={16} color="#222222" />;

const Search = () => {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.searchCont}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search on Multi-Mart"
      />
      <Text style={styles.searchIcon}>{searchIcon}</Text>
      <Text style={styles.micIcon}>{micIcon}</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchCont: {
    backgroundColor: 'rgba(65, 189, 165, .3)', // #41BDA5'
    borderRadius: 25,
  },
  input: {
    width: '100%',
    height: 40, // if change height then also change 'searchIcon' and 'micIcon's top value
    paddingHorizontal: 40,
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 12, // total height 40, icon height 16, so 50% is (40/2) - (16/2) = 12
  },
  micIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
});
