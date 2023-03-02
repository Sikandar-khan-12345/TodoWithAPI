import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from './Conatiner';
import Colors from '../../constents/Colors';
const ViewContainer = ({useSafeArea = false, children, style = {}}) => {
  return (
    <Container>
      {useSafeArea ? (
        <SafeAreaView style={{backgroundColor: Colors.white, ...style}}>
          {children}
        </SafeAreaView>
      ) : (
        <View style={{backgroundColor:Colors.white,...style}}>{children}</View>
      )}
    </Container>
  );
};

export default ViewContainer;

const styles = StyleSheet.create({});
