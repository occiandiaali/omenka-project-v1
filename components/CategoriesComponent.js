import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import {categories} from '../data/categories';

const CategoriesComponent = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('./../assets/images/mechanic.jpg')}
          />
          <Text>Mechanic</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('./../assets/images/laundry.jpg')}
          />
          <Text>Laundry</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('./../assets/images/electrician.jpg')}
          />
          <Text>Electrican</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('./../assets/images/cleaner.jpg')}
          />
          <Text>Cleaner</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('./../assets/images/power.jpg')}
          />
          <Text>Power</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('./../assets/images/aircondition.jpg')}
          />
          <Text>A/C Tech</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 9,
  },
  image: {
    width: 120,
    height: 90,
    borderRadius: 15,
  },
});
