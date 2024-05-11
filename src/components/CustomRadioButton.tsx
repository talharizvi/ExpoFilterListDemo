import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constants/colors';

interface CustomRadioButtonProps {
    handleSelectedUserType:(userType:string)=>void
}

const CustomRadioButton:React.FC<CustomRadioButtonProps> = ({handleSelectedUserType}) => {
    const [selectedOption, setSelectedOption] = useState<string>('admin');
  
    const handleOptionSelect = useCallback((option: string) => {
      if (option === selectedOption) {
          return;
      }
      setSelectedOption(option);
      handleSelectedUserType(option);
  }, [selectedOption, handleSelectedUserType]);
  
    return (
      <View>
        <TouchableOpacity
          style={[styles.itemView, selectedOption === 'admin' && styles.selectedOptionBackground]}
          onPress={() => {
            handleOptionSelect('admin')
        }}
        >
          <View
            style={styles.childView}
          >
            {selectedOption === 'admin' && (
              <View style={styles.selectedOptionView} />
            )}
          </View>
          <Text style={styles.itemTextStyle}>Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.itemView, selectedOption === 'manager' && styles.selectedOptionBackground]}
          onPress={() => {
            handleOptionSelect('manager')
        }}
        >
          <View
            style={styles.childView}
          >
            {selectedOption === 'manager' && (
              <View style={styles.selectedOptionView} />
            )}
          </View>
          <Text style={styles.itemTextStyle}>Manager</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
    itemView:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginRight: 20, 
        marginTop: 10, 
        borderRadius:8, 
        paddingVertical:12, 
        paddingLeft:8
    },
    childView:{
        height: 18,
        width: 18,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedOptionView:{
        height: 6, 
        width: 6, 
        borderRadius: 3, 
        backgroundColor: colors.selectedOptionColor
    },
    itemTextStyle:{ 
        marginLeft: 18 
    },
    selectedOptionBackground:{
        backgroundColor:colors.background
    }
})

export default CustomRadioButton;