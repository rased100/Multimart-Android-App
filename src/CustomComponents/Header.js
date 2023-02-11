import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
// import logo from '../../assets/mmLogo.jpg';

const menu = <Icon name="menu" size={15} color="red" />;

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon1}>
        <Text>
          <Icon name="menu" size={22} color="#222222" />
        </Text>
      </View>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.icon2}>
        <Icon name="menu" size={22} color="#222222" />
      </View>
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
    backgroundColor: '#D3D3D3',
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
    backgroundColor: '#D3D3D3',
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
