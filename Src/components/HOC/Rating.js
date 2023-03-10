import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../constents/Colors';
import Paragraph from '../UI/Paragraph';

const Rating = ({transparent = true, visible = true}) => {

  return (
    <View style={{flex: 1}}>
      <Modal transparent={transparent} visible={visible}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.gray,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '90%',
              height: 420,
              //   backgroundColor: Colors.white,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                height: 220,
                backgroundColor: Colors.white,
                borderRadius: 10,
              }}>
              <Paragraph top={80} size={20} textAlign="center">
                Please Rate Our App
              </Paragraph>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  //   borderWidth: 1,
                  top: 100,
                  width: '70%',
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../Assets/icons/rating.png')}
                  style={{width: 20, height: 20}}
                />
                <Image
                  source={require('../../Assets/icons/rating.png')}
                  style={{width: 20, height: 20}}
                />
                <Image
                  source={require('../../Assets/icons/rating.png')}
                  style={{width: 20, height: 20}}
                />
                <Image
                  source={require('../../Assets/icons/rating.png')}
                  style={{width: 20, height: 20}}
                />
                <Image
                  source={require('../../Assets/icons/rating.png')}
                  style={{width: 20, height: 20}}
                />
              </View>
              <TouchableOpacity
                style={{
                  top: 130,
                  //   borderWidth: 1,
                  width: '30%',
                  alignSelf: 'center',
                  alignItems: 'center',
                  padding: 5,
                  borderRadius: 10,
                  backgroundColor: Colors.gray,
                }}
            
                >
                <Paragraph size={19} style={{fontWeight: '900'}}>
                  Skip
                </Paragraph>
              </TouchableOpacity>
            </View>
            <Image
              source={require('../../Assets/icons/ratingIcon.png')}
              style={{width: 100, height: 100, position: 'absolute', top: 60}}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
