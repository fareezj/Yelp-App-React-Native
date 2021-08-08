import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import useResults from '../../hooks/useResults';
import ResultList from '../../components/ResultList';
import SearchBar from '../../components/SearchBar';
import {useEffect, useState} from 'react/cjs/react.development';
import CategoryList from '../../components/CategoryList';

const DashboardScreen = ({navigation}) => {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState('');
  const [categoryVisibility, setCategoryVisibility] = useState(true);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price == price;
    });
  };

  useEffect(() => {
    searchApi(category);
    console.log(results);
    setCategoryVisibility(false);
  }, [category]);

  displayCategory = () => {
    if (categoryVisibility) {
      return (
        <>
          <CategoryList onChoosenCategory={setCategory} />
        </>
      );
    } else {
      return (
        <>
          <Button
            title="Choose Category"
            onPress={() => {
              setCategoryVisibility(true);
            }}
          />
        </>
      );
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {displayCategory()}

      <ResultList title="Result List" results={results} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DashboardScreen;
