import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ViewContainer from '../../components/HOC/ViewContainer';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import Clickable from '../../components/HOC/Clickble';
import ScrollContainer from '../../components/HOC/ScrollContainer';
import Swiper from 'react-native-swiper';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../components/UI/Loader';

const Dashboard = ({navigation}) => {
  const [ApiData, setApiData] = useState([]);
  const [loaded, setloaded] = useState(false)

  useEffect(() => {
    GetDashboard();
  }, [useIsFocused]);

  const GetDashboard = async () => {
    setloaded(true)
    try {
      let GetData = await fetch(
        'https://light-pumps-seal.cyclic.app/DreamCoder/api/Dashbord',
      );
      let res = await GetData.json();
      let resData = await res;
      setloaded(false)

      setApiData(resData);

      // console.log('======resData======>',resData);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <ScrollContainer>
      <ViewContainer style={styles.MainContainer}>
        <Loader loading = {loaded}/>
        <View style={{height: 220}}>
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
            <Image
              source={{uri: ApiData[0]?.image}}
              style={{height: '100%', width: '100%'}}
            />
            <Image
              source={{uri: ApiData[1]?.image}}
              style={{height: '100%', width: '100%'}}
            />
            <Image
              source={{uri: ApiData[2]?.image}}
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
                source={{uri: ApiData[0]?.image}}
                style={styles.Img1}
                resizeMode="contain"
              />
            </View>
            <View style={styles.txtcontainer}>
              <View style={styles.Count}>
                <Paragraph color={Colors.red} style={{fontWeight: 'bold'}}>
                {ApiData[0]?.data.length}
                </Paragraph>
              </View>

              <Paragraph
                color={Colors.black}
                right={20}
                size={17}
                textAlign = 'center'
                style={styles.txt}>
                STUDENTS {'\n'} LIST
              </Paragraph>
            </View>
          </Clickable>
          <Clickable
            style={styles.Container1}
            onPress={() => navigation.navigate('Employees')}>
            <View style={styles.imgContainer}>
              <Image
                source={{uri: ApiData[1]?.image}}
                style={styles.Img1}
                resizeMode="contain"
              />
            </View>
            <View style={styles.txtcontainer}>
              <View style={styles.Count}>
                <Paragraph color={Colors.red} style={{fontWeight: 'bold'}}>
                {ApiData[1]?.data.length}
                </Paragraph>
              </View>
              <Paragraph
                color={Colors.black}
                right={20}
                size={17}
                style={styles.txt}
                textAlign = 'center'
                >
                EMPLOYESS {'\n'} LIST
              </Paragraph>
            </View>
          </Clickable>
          <Clickable
            style={styles.Container1}
            onPress={() => navigation.navigate('Products')}>
            <View style={styles.imgContainer}>
              <Image
                source={{uri: ApiData[2]?.image}}
                style={styles.Img1}
                resizeMode="contain"
              />
            </View>
            <View style={styles.txtcontainer}>
              <View style={styles.Count}>
                <Paragraph color={Colors.red} style={{fontWeight: 'bold'}}>
                  {ApiData[2]?.data.length}
                </Paragraph>
              </View>

              <Paragraph
                color={Colors.black}
                right={20}
                size={17}
                textAlign = 'center'
                style={styles.txt}>
                PRODUCTS {'\n'} LIST
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
  Count: {
    borderWidth: 1,
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: Colors.purple,
    right: 0,
    top: 0,
    backgroundColor: Colors.white,
  },
});
