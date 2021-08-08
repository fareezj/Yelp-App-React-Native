import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultItem from './ResultItem';

const ResultList = ({title, results, navigation}) => {

    if(!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{ title }</Text>
            <FlatList
                vertical
                showsHorizontalScrollIndicator = {false}
                data = {results}
                keyExtractor = {result => result.id}
                renderItem = { ({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Restaurant', {id: item.id})
                            }}>
                            <ResultItem result={item} />
                        </TouchableOpacity>
                    )
                } }
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginVertical: 25
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default withNavigation(ResultList);