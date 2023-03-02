import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Colors from '../../constents/Colors';
const behavior = Platform.OS == 'ios' ? 'padding' : undefined;
const FormContainer = ({
  children,
  style = {},
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
}) => {
  return (
    <View style={{flex: 1, ...style,}}>
      <KeyboardAvoidingView
        behavior={behavior}
        style={{background: Colors.white}}
        >
        <ScrollView
        style={style}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({});
