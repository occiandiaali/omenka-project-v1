import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CategoriesComponent from '../components/CategoriesComponent';
import SearchBarComponent from '../components/SearchBarComponent';

export default function Home() {
  return (
    <View>
      <SearchBarComponent />
      <CategoriesComponent />
      <Text style={styles.topWorkersText}>Top Workers</Text>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./../assets/images/mechanic.jpg')}
        />
      </View>
      <Text style={styles.topWorkersText}>New Entries</Text>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./../assets/images/aircondition.jpg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    padding: 11,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 11,
  },
  topWorkersText: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: 'red',
    fontSize: 22,
    marginTop: 7,
    fontWeight: 'bold',
    padding: 8,
  },
});
