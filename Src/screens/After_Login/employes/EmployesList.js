import {StyleSheet,View, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ViewContainer from '../../../components/HOC/ViewContainer';
import Clickable from '../../../components/HOC/Clickble';
import {IconPath} from '../../../Assets';
import Colors from '../../../constents/Colors';
import {useIsFocused} from '@react-navigation/native';
import Paragraph from '../../../components/UI/Paragraph';
import Loader from '../../../components/UI/Loader';
import {Swipeable} from 'react-native-gesture-handler';

const EmployesList = ({navigation}) => {
  const [Data, setData] = useState([]);
  const [loaded, setloaded] = useState(true);
  useEffect(() => {
    GetEmploy();
  }, [useIsFocused()]);

  const GetEmploy = async () => {
    try {
      let results = await fetch(
        'https://light-pumps-seal.cyclic.app/DreamCoder/api/Employe',
      );

      let res = await results.json();
      let resData = await res;
      setloaded(false);

      // console.log('===========>',resData);

      let ResultsData = resData.message;

      setData(ResultsData);
    } catch (err) {
      alert(err);
    }
  };

  const LeftSwipe = () => {
    return (
      <Clickable style={styles.leftswip}>
        <Image source={IconPath.delete} style={{width: 20, height: 20}} />
      </Clickable>
    );
  };
  const RightSwipe = () => {
    return (
      <Clickable style={styles.leftswip}>
        <Image source={IconPath.edit} style={{width: 20, height: 20}} />
      </Clickable>
    );
  };

  const renderItem = ({item}) => {
    return (
      <Swipeable renderLeftActions={LeftSwipe} renderRightActions={RightSwipe}>
        <Clickable
          style={styles.FlatMainContainer}
          onPress={() =>
            navigation.navigate('EmployesDetails', {data: {item}})
          }>
          <Paragraph color={Colors.white} style={{paddingLeft: 10}}>
            Name: {item.Employname}
          </Paragraph>
        </Clickable>
      </Swipeable>
    );
  };
  return (
    <ViewContainer style={{flex: 1}}>
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
      <Loader loading={loaded} />
      <FlatList data={Data} renderItem={renderItem} />
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
  FlatMainContainer: {
    width: '90%',
    height: 50,
    //  borderWidth:1,
    justifyContent: 'space-between',
    backgroundColor: Colors.purple,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  ClickShow: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    top: 10,
    right: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  leftswip: {
    width: '15%',
    height: 50,
     borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal:15
  },
});
