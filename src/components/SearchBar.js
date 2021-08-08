import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <TextInput
                autoCapitalize= 'none'
                autoCorrect= {false}
                placeholder= 'Search'
                value= {term}
                onChangeText= {onTermChange}
                style= {styles.inputStyle}
            />
            <Button 
                title= 'Search'
                onPress={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 18,
        height: 50,
        borderRadius: 5
    }, 
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;