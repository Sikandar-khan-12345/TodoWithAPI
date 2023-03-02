import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ViewContainer from './ViewContainer';

const ScrollContainer = ({
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  style = {},
  useSafeArea = false,
  children
}) => {
  return (
    <ViewContainer style={style} useSafeArea={useSafeArea}>
      <ScrollView
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        style={styles.Scroll}
        
        >
        {children}
      </ScrollView>
    </ViewContainer>
  );
};

export default ScrollContainer;

const styles = StyleSheet.create({
    Scroll: {},
});
