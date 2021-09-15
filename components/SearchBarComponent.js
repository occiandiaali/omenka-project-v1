import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SearchBar} from 'react-native-elements';

export default function SearchBarComponent() {
  return (
    <SearchBar
      placeholder="Search here..."
      placeholderTextColor="white"
      round="true"
      lightTheme="true"
    />
  );
}

const styles = StyleSheet.create({});
