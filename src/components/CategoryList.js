import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const catList = [
    {id: '1', category: 'clinic'},
    {id: '2', category: 'bars'},
    {id: '3', category: 'hospital'},
]

const CategoryList = ({onChoosenCategory}) => {

    return (
        <View>
            <FlatList
                data={catList}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity
                            onPress={() => {
                                onChoosenCategory(item.category)
                            }}
                        >
                            <Text>{item.category}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CategoryList;