import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ViewContainer from '../../components/HOC/ViewContainer';
import {ImagePath} from '../../Assets';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import Clickable from '../../components/HOC/Clickble';
import ScrollContainer from '../../components/HOC/ScrollContainer';
import Swiper from 'react-native-swiper';

const Dashboard = ({navigation}) => {
  return (
    <ScrollContainer>
      <ViewContainer style={styles.MainContainer}>
        <View style={{height: 220}}>
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
            <Image
              source={ImagePath.Student1}
              style={{height: '100%', width: '100%'}}
            />
            <Image
              source={ImagePath.Employees1}
              style={{height: '100%', width: '100%'}}
            />
            <Image
              source={ImagePath.products1}
              style={{height: '100%', width: '100%'}}
            />
          </Swiper>
        </View>
        <View>
          <Clickable
            style={styles.Container1}
            onPress={() => navigation.navigate('Students')}>
            <View style={styles.imgContainer}>
              <Image
                source={ImagePath.Students}
                style={styles.Img1}
                resizeMode="contain"
              />
            </View>
            <View style={styles.txtcontainer}>
              <Paragraph
                color={Colors.black}
                top={7}
                size={17}
                style={styles.txt}>
                STUDENTS DETAILS
              </Paragraph>
            </View>
          </Clickable>
          <Clickable
            style={styles.Container1}
            onPress={() => navigation.navigate('Employees')}>
            <View style={styles.imgContainer}>
              <Image
                source={ImagePath.Employees}
                style={styles.Img1}
                resizeMode="contain"
              />
            </View>
            <View style={styles.txtcontainer}>
              <Paragraph
                color={Colors.black}
                top={7}
                size={17}
                style={styles.txt}>
                EMPLOYESS DETAILS 
              </Paragraph>
            </View>
          </Clickable>
          <Clickable
            style={styles.Container1}
            onPress={() => navigation.navigate('Products')}>
            <View style={styles.imgContainer}>
              <Image
                source={ImagePath.products}
                style={styles.Img1}
                resizeMode="contain"
              />
            </View>
            <View style={styles.txtcontainer}>
              <Paragraph
                color={Colors.black}
                top={7}
                size={17}
                style={styles.txt}>
                PRODUCTS DETAILS
              </Paragraph>
            </View>
          </Clickable>
        </View>
      </ViewContainer>
    </ScrollContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // padding: 5,
    backgroundColor: Colors.white,
  },
  Container1: {
    // borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    alignItems: 'center',
    height: 120,
    borderRadius: 20,
    backgroundColor: Colors.smokWhite,
    elevation: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },

  Img1: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    // borderRadius:20
  },
  Img2: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  txt: {
    transform: [{rotate: '-10deg'}],
    paddingTop: 20,
    fontWeight: 'bold',
  },
  txtcontainer: {
    width: 130,
    height: 120,
  },
  imgContainer: {
    width: 150,
    height: 120,
  },
});
