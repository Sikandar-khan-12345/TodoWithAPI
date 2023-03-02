import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import ViewContainer from '../../../components/HOC/ViewContainer';
import {IconPath} from '../../../Assets';
import Colors from '../../../constents/Colors';
import Clickable from '../../../components/HOC/Clickble';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../../components/UI/Loader';
import Paragraph from '../../../components/UI/Paragraph';

const StudentsList = ({navigation}) => {
  const [StudentsList, setStudentsList] = useState([]);
  const [loder, setloder] = useState(true);
  useEffect(() => {
    getStudentsData();
  }, [useIsFocused()]);

  const getStudentsData = async () => {
    try {
      let Data = await fetch(
        'https://light-pumps-seal.cyclic.app/DreamCoder/api/student',
      );

      let res = await Data.json();
      setStudentsList(res.message);

      if (res) {
        setloder(false);
      }
      // console.log('===========>', res);
    } catch (err) {
      aler(err);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.FlatListMainContainer}>
        <View>
          <Paragraph color={Colors.white} style={{paddingVertical: 2}}>
            Name: {item.name}
          </Paragraph>
          <Paragraph color={Colors.white} style={{paddingVertical: 2}}>
            Email: {item.email}
          </Paragraph>

          <Paragraph color={Colors.white} style={{paddingVertical: 2}}>
            Number: {item.number}
          </Paragraph>
          <Paragraph color={Colors.white} style={{paddingVertical: 2}}>
            School Name: {item.schoolname}
          </Paragraph>
          <Paragraph color={Colors.white} style={{paddingVertical: 2}}>
            Subject: {item.subject}
          </Paragraph>
          <Paragraph color={Colors.white} style={{paddingVertical: 2}}>
            Country: {item.country}
          </Paragraph>
          <Paragraph color={Colors.white} style={{paddingVertical: 2}}>
            Coursse: {item.coursse}
          </Paragraph>
          <Paragraph color={Colors.white} style={{paddingVertical: 2}}>
            Gender: {item.gender}
          </Paragraph>
        </View>
        <View
          style={{
            // borderWidth: 1,
            width: 140,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            right: 10,
          }}>
          <View style={styles.icon}>
            <Image source={IconPath.edit} style={{width: 20, height: 20}} />
          </View>

          <View style={styles.icon}>
            <Image source={IconPath.delete} style={{width: 20, height: 20}} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ViewContainer style={styles.MainContaine}>
      <View
        style={{
          backgroundColor: Colors.gray,
          height: 50,
          justifyContent: 'center',
        }}>
        <View style={{width: '95%'}}>
          <Clickable
            style={styles.AddIconContainer}
            onPress={() => navigation.navigate('StudentsAddList')}>
            <Image source={IconPath.Add} style={styles.Addicon} />
          </Clickable>
        </View>
      </View>
      <Loader loading={loder} />
      <FlatList data={StudentsList} renderItem={renderItem} />
    </ViewContainer>
  );
};

export default StudentsList;

const styles = StyleSheet.create({
  MainContaine: {
    // padding: 10,
    backgroundColor: Colors.white,

    flex: 1,
  },
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
  FlatListMainContainer: {
    width: '94%',
    height: 250,
    // borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    backgroundColor: Colors.purple,
    justifyContent: 'space-around',
    paddingLeft: 10,
    elevation: 10,
  },

  icon: {
    borderWidth: 1,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.white,
    elevation: 10,
  },
});
