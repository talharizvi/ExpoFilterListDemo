import React, { useState, useEffect, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { useFetchUserData } from '../hooks/useFetchUserData';
import UserListItem from '../components/UserListItem';
import CategoryHeader from '../components/CategoryHeader';
import CustomRadioButton from '../components/CustomRadioButton';
import LineSeparator from '../components/LineSeparator';
import colors from '../constants/colors';
import { filterUsersByType } from '../utils/utils';

interface User {
    name: string;
    type: number;
}

const CustomersScreen:React.FC =()=> {
    const {listItems, isLoading} = useFetchUserData()
    const [filteredList, setFilteredList] = useState<User[]>([])

    useEffect(()=>{
        filterListByUserType('admin')
    },[listItems])

    const filterListByUserType = (userType: string)=>{
        const resultList = filterUsersByType(listItems, userType);
        setFilteredList(resultList);
    }

    const handleUserChange=(userType:string)=>{
        filterListByUserType(userType)
    }

    if (isLoading){
        return(<View style={styles.loaderView}>
          <ActivityIndicator color={colors.loader} size='small'/>
        </View>) 
      }

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <CategoryHeader category='User Types'/>
        <CustomRadioButton handleSelectedUserType={handleUserChange}/>
        <LineSeparator />
        <CategoryHeader category='Manager Users'/>
        {filteredList.map((item: User, index: number)=><UserListItem name={item.name} userType={item.type} key={index}/>)}
        <LineSeparator />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:24,
      backgroundColor: colors.primary
    },
    loaderView:{
      flex:1, 
      justifyContent:'center', 
      alignItems:'center'
    }
});  

export default CustomersScreen
