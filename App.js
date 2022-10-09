import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Form from './components/page.js';

function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Calculadora de IMC</Text>
        </View>
    )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    paddingTop:40,
  },
      boxTitle: {
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    },
    textTitle:{
        color:'#FFFFFF',
        fontSize:28,
        fontWeight:'bold',
    }
});