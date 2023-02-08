import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    const handleButton = () =>{
        navigation.navigate('Login')
    }
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Pressable style={styles.button} onPress={()=>{handleButton()}}>
            <Text style={{color: '#FFFFFF'}}>
                Login
            </Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        width: 100,
        height: 34,
        backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
})