import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import imgPath from '../../assest/Index';

const BackGround = ({children,style}) => {
  return (
    <View>
      <ImageBackground source={imgPath.neem} style={{height: '100%',...style}} />
      <View style={{position: 'absolute',alignSelf:'center'}}>
        {children}
      </View>
    </View>
  );
};

export default BackGround;

const styles = StyleSheet.create({});
