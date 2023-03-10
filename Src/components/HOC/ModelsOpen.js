import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../../constents/Colors';
import {IconPath} from '../../Assets';
import Paragraph from '../UI/Paragraph';

const ModelsOpen = ({transparent = true, visible = true}) => {
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
              height: 200,
              backgroundColor: Colors.white,
              borderRadius: 10,
              elevation: 10,
            }}>
            <Image
              source={IconPath.delete}
              style={{
                width: 35,
                height: 35,
                alignSelf: 'center',
                top: 20,
                tintColor: Colors.red,
                // transform: [{rotate : '9deg'}],
              }}
            />
            <Paragraph
              style={{alignSelf: 'center', top: 35, fontWeight: 'bold'}}
              size={20}>
              Are you sure delete this file ?
            </Paragraph>
            <View
              style={{
                top: 70,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                style={{
                  width: '40%',
                  padding: 10,
                  //   borderWidth: 1,
                  backgroundColor: Colors.red,
                  borderRadius: 10,
                }}>
                <Paragraph
                  textAlign="center"
                  style={{fontWeight: 'bold', color: Colors.white}}>
                  Ok
                </Paragraph>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '40%',
                  padding: 10,
                  //   borderWidth: 1,
                  backgroundColor: Colors.primary,
                  borderRadius: 10,
                }}>
                <Paragraph
                  textAlign="center"
                  style={{fontWeight: 'bold', color: Colors.white}}>
                  Cancle
                </Paragraph>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModelsOpen;

const styles = StyleSheet.create({});
