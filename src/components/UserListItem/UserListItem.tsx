import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import colors from "../../constants/colors";

interface UserListItemProps{
    name: String,
    userType: number,
    index?: number
}

const UserListItem: React.FC<UserListItemProps> = ({name, userType, index})=>{

 return(<View style={styles.container} testID={`user-${index}`}>
    <View style={styles.parentView}>
    
    <View style={styles.nameIconView}>
        <Text style={styles.nameIconText}>{name[0]}</Text>
    </View>

    <View>
        <Text style={styles.userNameText}>{name}</Text>
        <Text style={styles.userTypeText}>{userType === 0 ? 'Admin': 'Manager'}</Text>
    </View>
    </View>
    
    
 </View>)

}

const styles = StyleSheet.create({
    container:{
        marginBottom: 24,
        marginTop:8
    },
    parentView:{
        flexDirection: 'row'
    },
    nameIconView:{
        backgroundColor:colors.background, 
        marginRight:14, 
        borderRadius:8,
        justifyContent:'center',
        paddingHorizontal:12
    },
    nameIconText:{
        color:colors.iconText,
    },
    userNameText:{
        fontWeight: '600',
        fontSize: 14
    },
    userTypeText:{
        color:colors.userText,
    }
    
});

export default UserListItem;