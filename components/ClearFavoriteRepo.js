import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Alert} from 'react-native';
import color from '../constants/color';
import {clearAllFavoriteRepo} from '../store/actions';

const ClearFavoriteRepo = () => {
  const dispatch = useDispatch();
  const handleClearAllFavoriteRepo = useCallback(() => {
    dispatch(clearAllFavoriteRepo());
    Alert.alert('Hello', 'All favorites repositories have been deleted');
  }, [dispatch]);
  return (
    <Button
      title="Clear all favorites"
      color={color.primaryColor}
      onPress={handleClearAllFavoriteRepo}
    />
  );
};

export default ClearFavoriteRepo;
