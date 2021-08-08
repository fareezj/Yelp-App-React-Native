import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react/cjs/react.development';
import yelp from '../../api/yelp';

const RestaurantScreen = ({navigation}) => {

    const [results, setResults] = useState(null);
    const id = navigation.getParam('id');

    const getResults = async id => {
        const response = await yelp.get(`/${id}`);
        setResults(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getResults(id);
    }, []);

    if(!results) {
        return null;
    }

    return(
        <View>
            <Text>{results.name}</Text>
            <FlatList
                horizontal
                data={results.photos}
                keyExtractor={ (photo) => photo }
                renderItem={({item}) => {
                    return(
                        <Image style={styles.image} source={{uri: item}}/>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 500,
        height: 300
    }
})

export default RestaurantScreen;