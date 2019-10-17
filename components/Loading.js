import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import color from '../constants/color';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={color.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default Loading;
