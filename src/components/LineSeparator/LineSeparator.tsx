import React from "react"
import { View, StyleSheet } from 'react-native';
import colors from "../../constants/colors";

const LineSeparator: React.FC=()=>{
    return(<View testID="line-separator" style={styles.viewStyle}/>) 
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