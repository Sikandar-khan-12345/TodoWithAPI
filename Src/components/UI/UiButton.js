import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React, {memo} from 'react';
import Colors from '../../constents/Colors';
import Clickable from '../HOC/Clickble';
import Paragraph from './Paragraph';
const UiButton = ({
  text = 'Press Me',
  onPress = () => {},
  loading = false,
  disable = false,
  backgroundColor = Colors.purple,
  style = {},
  textColor = Colors.white,
  txtSize = 22,
}) => {
  const buttonDisable = disable || loading;
  const buttonStyle = [styles.button, {backgroundColor}, style];
  return (
    <View style={{opacity: disable ? 0.7 : 1}}>
      <Clickable onPress={onPress} disable={buttonDisable} style={buttonStyle}>
        {loading ? (
          <ActivityIndicator color={textColor} size="small" />
        ) : (
          <Paragraph size={txtSize} type="medium" color={textColor}>
            {text}
          </Paragraph>
        )}
      </Clickable>
    </View>
  );
};

export default memo(UiButton);

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    // elevation: 1,
    marginVertical: 20,
  },
});
