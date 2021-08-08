import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RestaurantScreen = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}} />
            <Text style={styles.name} >{ result.name }</Text>
            <Text>{ result.rating } Stars, { result.review_count } Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15
    },
    image: {
        width: window.width,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default RestaurantScreen;