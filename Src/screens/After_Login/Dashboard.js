import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ViewContainer from '../../components/HOC/ViewContainer';
import {ImagePath} from '../../Assets';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import Clickable from '../../components/HOC/Clickble';
import ScrollContainer from '../../components/HOC/ScrollContainer';

const Dashboard = ({navigation}) => {
  return (
    <ScrollContainer>
      <ViewContainer style={styles.MainContainer}>
        <Clickable
          style={styles.Container1}
          onPress={() => navigation.navigate('Students')}>
          <Image
            source={ImagePath.Students}
            style={styles.Img1}
            resizeMode="contain"
          />
          <Paragraph color={Colors.white} top={7} size={20}>
            STUDENTS DETAILS
          </Paragraph>
        </Clickable>
        <Clickable
          style={styles.Container1}
          onPress={() => navigation.navigate('Employees')}>
          <Image
            source={ImagePath.Employees}
            style={styles.Img2}
            resizeMode="contain"
          />
          <Paragraph color={Colors.white} top={7} size={20}>
            EMPLOYEES DETAILS
          </Paragraph>
        </Clickable>
        <Clickable
          style={styles.Container1}
          onPress={() => navigation.navigate('Products')}>
          <Image
            source={ImagePath.products}
            style={styles.Img2}
            resizeMode="contain"
          />
          <Paragraph color={Colors.white} top={7} size={20}>
            PRODUCTS DETAILS
          </Paragraph>
        </Clickable>
      </ViewContainer>
    </ScrollContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.smokWhite,
  },
  Container1: {
    // borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    alignItems: 'center',
    height: 200,
    borderRadius: 20,
    backgroundColor: Colors.cofi,
    elevation: 10,
  },

  Img1: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  Img2: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
