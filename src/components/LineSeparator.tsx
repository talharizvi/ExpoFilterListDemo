import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from "../constants/colors";

const LineSeparator: React.FC=()=>{
    return(<View style={styles.viewStyle}>

    </View>) 
}

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor: colors.secondary,
        height: 1,
        marginTop:18,
        marginRight: 20,
        marginLeft:2
    }
});

export default LineSeparator