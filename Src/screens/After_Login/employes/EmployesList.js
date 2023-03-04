import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ViewContainer from '../../../components/HOC/ViewContainer';
import Clickable from '../../../components/HOC/Clickble';
import {IconPath} from '../../../Assets';
import Colors from '../../../constents/Colors';

const EmployesList = ({navigation}) => {
  return (
    <ViewContainer>
      <View
        style={{
          backgroundColor: Colors.gray,
          height: 50,
          justifyContent: 'center',
        }}>
        <View style={{width: '95%'}}>
          <Clickable
            style={styles.AddIconContainer}
            onPress={() => navigation.navigate('EmployesAddList')}>
            <Image source={IconPath.Add} style={styles.Addicon} />
          </Clickable>
        </View>
      </View>
    </ViewContainer>
  );
};

export default EmployesList;

const styles = StyleSheet.create({
  Addicon: {
    width: '60%',
    height: '60%',
  },
  AddIconContainer: {
    // borderWidth: 1,
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.white,
    elevation: 10,
  },
});
