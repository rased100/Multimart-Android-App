import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../CustomComponents/Header';
import Search from '../CustomComponents/Search';

const Home = ({navigation}) => {
  const handleButton = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchCont}>
        <Search />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: 10,
  },
  searchCont: {
    marginTop: 10,
  },
});
