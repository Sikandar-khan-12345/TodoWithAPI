import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Rating from '../components/HOC/Rating';
import ModelsOpen from '../components/HOC/ModelsOpen';
import ModalContainer from '../components/HOC/ModalContainer';
import ModalScreen from '../components/HOC/ModalScreen';

const ModalTest = () => {
  return (
    <View style={{flex:1}}>
        {/* <Rating/> */}
      {/* <ModelsOpen /> */}
      {/* <ModalContainer/> */}
      <ModalScreen/>
    </View>
  );
};

export default ModalTest;

const styles = StyleSheet.create({});
