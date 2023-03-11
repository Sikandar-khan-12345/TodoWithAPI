import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ViewContainer from '../../../components/HOC/ViewContainer';
import Clickable from '../../../components/HOC/Clickble';
import {IconPath, ImagePath} from '../../../Assets';
import Colors from '../../../constents/Colors';
import {useIsFocused} from '@react-navigation/native';
import Paragraph from '../../../components/UI/Paragraph';
import Loader from '../../../components/UI/Loader';
import SimpleToast from 'react-native-simple-toast';
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

  const DeleteEmployesList = async item => {
    let data = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    };

    try {
      let ResultsApi = await fetch(
        `https://light-pumps-seal.cyclic.app/DreamCoder/api/Employe/${item._id}`,
        data,
      );

      let res = await ResultsApi.json();
      let resData = await res;

      if (resData) {
        SimpleToast.show(
          `Delete Employe ${item.Employname} Data ${item._id}`,
          SimpleToast.SHORT,
        );
        GetEmploy();
      }

      console.log('=====resData============>', resData);
    } catch (err) {
      alert(err);
    }
  };

  const EditEmployesList = (item) =>{
    navigation.navigate('EmployesAddList',{data:item})
  }

  const renderItem = ({item}) => {
    return (
      <Clickable
        style={styles.FlatMainContainer}
        onPress={() => navigation.navigate('EmployesDetails', {data: {item}})}>
        <View style={styles.editimgcontainer}>
          <Paragraph color={Colors.white} style={{paddingLeft: 10}}>
            Name: {item.Employname}
          </Paragraph>
          <TouchableOpacity onPress={() =>EditEmployesList(item)}>
            <Image source={IconPath.edit} style={styles.editimg} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{width: 20, height: 20}}
          onPress={() => DeleteEmployesList(item)}>
          <Image source={IconPath.cross} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      </Clickable>
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
      {Data?.length == 0 ? (
        <View style={styles.EmptyImg}>
          <Image
            source={ImagePath.Employees}
            style={{width: '80%', height: 200, borderRadius: 20}}
          />
          <Paragraph color={Colors.gray} size={20}>
            Employees List Is Empty
          </Paragraph>
        </View>
      ) : (
        ''
      )}
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
    //  borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  EmptyImg: {
    width: '100%',
    height: 400,
    // borderWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  editimg: {
    width: 15,
    height: 15,
    tintColor: Colors.white,
    marginRight: 10,
    left: 5,
  },
  editimgcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
