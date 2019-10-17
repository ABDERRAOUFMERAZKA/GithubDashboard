import React from 'react';
import SnackBar from 'react-native-snackbar-component';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

const SnackInformation = ({
    statusCode,
    loading,
    data,
    username,
}) => {
  const isEmptyRepository = !loading && data.length === 0
  const isClientError = statusCode > 399 && statusCode < 500
  const isServerError = statusCode > 499 && statusCode < 600
  let errorMessage = ''
   if (isEmptyRepository &&  isClientError ) {
        errorMessage = 'Client Error'
   } else if (isEmptyRepository &&  isClientError) {
    errorMessage = 'Server Error'
   } else {
    errorMessage = 'Github UserName Not Found'
   }
  return (
    <View>
      <SnackBar
        visible={username !== '' && isEmptyRepository}
        textMessage={errorMessage}
        actionText="retry please !"
        backgroundColor= { !isEmptyRepository &&  isClientError ? '#3e57208' : '#d62d2d' }
        accentColor="white"
        bottom={-700}
        autoHidingTime={24000}
      />
    </View>
  );
};

SnackInformation.propTypes = {
  statusCode: PropTypes.number,
  data: PropTypes.array,
  username: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default SnackInformation;
