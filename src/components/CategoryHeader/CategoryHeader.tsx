import React from "react";
import {Text, View, StyleSheet} from 'react-native';

interface Category {
    category: String,
    testID?: string;
}

const CategoryHeader: React.FC<Category>=({category})=>{

    return(
    <View testID='category-header'>
        <Text style={styles.categoryText}>{category}</Text>
    </View>
    );

}

const styles = StyleSheet.create({
    categoryText:{
        fontWeight:'bold',
        fontSize: 18,
        marginTop: 16,
        marginBottom:8
    }    
});

export default CategoryHeader