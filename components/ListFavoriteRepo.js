import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import FavoriteRepo from './FavoriteRepo';

const ListFavoriteRepo = () => {
  const favoriteRepo = useSelector(state => state.favoriteRepo);
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={favoriteRepo}
      renderItem={({item}) => <FavoriteRepo {...item} />}
    />
  );
};

export default ListFavoriteRepo;
