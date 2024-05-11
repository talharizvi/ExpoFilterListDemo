import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';


const HomeScreen:React.FC=()=> {
    return (
      <View style={styles.container}>
        <Text>Empty Screen</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
});  

export default HomeScreen
