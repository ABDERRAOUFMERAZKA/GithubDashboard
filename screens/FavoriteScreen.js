import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListFavoriteRepo from '../components/ListFavoriteRepo';

const FavoriteScreen = () => {
  return (
    <View style={styles.screen}>
      <ListFavoriteRepo />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    paddingTop: 50,
  },
});

export default FavoriteScreen;
