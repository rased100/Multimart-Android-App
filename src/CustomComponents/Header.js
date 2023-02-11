import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import logo from '../../assets/mmLogo.jpg';

const menu = <Icon name="menu" size={22} color="#222222" />;
const cart = <AntDesign name="shoppingcart" size={22} color="#222222" />;

const Header = () => {
  const handleMenubutton = () => {
    console.log('menu button pressed');
  };
  const handleCartbutton = () => {
    console.log('cart button pressed');
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          handleMenubutton();
        }}>
        <View style={styles.icon1}>
          <Text>{menu}</Text>
        </View>
      </Pressable>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.imageStyle}
        />
      </View>
      <Pressable
        onPress={() => {
          handleCartbutton();
        }}>
        <View style={styles.icon2}>
          <Text>{cart}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    // height: 36,
  },
  icon1: {
    padding: 5,
    backgroundColor: 'rgba(65, 189, 165, .3)',
    borderRadius: 25,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  logo: {
    flex: 1,
    paddingLeft: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },
  icon2: {
    padding: 5,
    backgroundColor: 'rgba(65, 189, 165, .3)',
    borderRadius: 25,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    width: 100,
    resizeMode: 'contain',
    // height: 36,
    // marginLeft: 10,
  },
});
