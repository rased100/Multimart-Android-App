import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../CustomComponents/Header';

const Home = ({navigation}) => {
  const handleButton = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Header />
      <Text>Home Page</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          handleButton();
        }}>
        <Text style={{color: '#FFFFFF'}}>Login 123</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 34,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});
