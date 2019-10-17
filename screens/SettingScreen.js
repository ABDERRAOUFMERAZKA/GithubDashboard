import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ClearFavoriteRepo from '../components/ClearFavoriteRepo';

const SettingScreen = () => {
  return (
    <View style={styles.screen}>
      <ClearFavoriteRepo />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;
