import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../constants/color';
import {toggleFavoriteRepo} from '../store/actions';

const Repo = ({id, name, description, owner}) => {
  // dispatch an action
  const dispatch = useDispatch();
  const handleToggleFavoriteRepo = useCallback(() => {
    dispatch(
      toggleFavoriteRepo({
        id: id.toString(),
        name,
        description,
        owner: owner.login,
      }),
    );
  }, [dispatch, id]);
  // check if repo is in list of favorite repo
  const favoriteRepo = useSelector(state => state.favoriteRepo);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const index = favoriteRepo.findIndex(e => e.id === id.toString());
    setIsFavorite(index > -1);
  }, [favoriteRepo]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.favorite}
        onPress={handleToggleFavoriteRepo}>
        <Ionicons
          name={isFavorite ? 'ios-heart' : 'ios-heart-empty'}
          size={28}
          color={color.thirdColor}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.owner}>{owner.login}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    height: 150,
    borderRadius: 10,
    shadowOpacity: 0.25,
    padding: 10,
    margin: 10,
    backgroundColor: color.primaryColor,
  },
  favorite: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  name: {
    color: color.thirdColor,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: color.thirdColor,
    fontSize: 16,
    textAlign: 'left',
  },
  owner: {
    color: color.thirdColor,
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'right',
  },
});

export default Repo;
