import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import ViewContainer from '../../../components/HOC/ViewContainer';
import Paragraph from '../../../components/UI/Paragraph';
import Colors from '../../../constents/Colors';
import {IconPath, ImagePath} from '../../../Assets';
import Clickable from '../../../components/HOC/Clickble';
import Loader from '../../../components/UI/Loader';
import SimpleToast from 'react-native-simple-toast';
const ProductsList = ({navigation}) => {
  const [Data, setData] = useState([]);
  const [loader, setloader] = useState(false);
  useEffect(() => {
    GetProducts();
  }, [useIsFocused()]);
  GetProducts = async () => {
    setloader(true);
    try {
      let ReciveApi = await fetch(
        'https://light-pumps-seal.cyclic.app/DreamCoder/api/getProducts',
      );
      let res = await ReciveApi.json();
      let resData = await res;
      setloader(false);
      setData(resData);
      // console.log('=======>', Data);
    } catch (err) {
      alert(err);
    }
  };
  const DeleteProductsList = async item => {
    let Data = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    };

    try {
      let ResultsApi = await fetch(
        `https://light-pumps-seal.cyclic.app/DreamCoder/api/deleteProducts/${item._id}`,
        Data,
      );

      let res = await ResultsApi.json();
      let ResData = await res;

      if (ResData) {
        SimpleToast.show(
          `Delete Products ${item.title} ID ${item._id}`,
          SimpleToast.SHORT,
        );
        GetProducts();
      }
    } catch (err) {
      alert(err);
    }
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.txtcontainer}>
          <Paragraph style={{marginVertical: 3}}>TItle: {item.title}</Paragraph>
          <Paragraph style={{marginVertical: 3}}>Color: {item.color}</Paragraph>
          <Paragraph style={{marginVertical: 3}}>Price: {item.price}</Paragraph>
          <Paragraph style={{marginVertical: 3}}>
            Rating: {item.reting}
          </Paragraph>
          <Paragraph style={{marginVertical: 3}}>
            createdAt: {item.createdAt}
          </Paragraph>
        </View>
        <View style={styles.imgcontainer}>
          <Image
            source={{uri: item.img}}
            style={styles.img}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.deletView}
            onPress={() => DeleteProductsList(item)}>
            <Image
              source={IconPath.delete}
              style={{width: 20, height: 20, tintColor: Colors.red}}
            />
          </TouchableOpacity>
        </View>
      </View>
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
            onPress={() => navigation.navigate('ProductsAddList')}>
            <Image source={IconPath.Add} style={styles.Addicon} />
          </Clickable>
        </View>
      </View>
      <Loader loading={loader} />
      {Data?.length == 0 ? (
        <View style={styles.EmptyImg}>
          <Image
            source={ImagePath.products}
            style={{width: '80%', height: 200, borderRadius: 20}}
          />
          <Paragraph color={Colors.gray} size={20}>
            Products List Is Empty
          </Paragraph>
        </View>
      ) : (
        ''
      )}
      <FlatList data={Data} renderItem={renderItem} />
    </ViewContainer>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  Addicon: {
    width: '60%',
    height: '60%',
  },
  AddIconContainer: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.white,
    elevation: 10,
  },
  mainContainer: {
    width: '95%',
    height: 200,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: Colors.green,
    elevation: 10,
  },
  txtcontainer: {
    width: '55%',
    // borderRadius: 20,
    padding: 10,
  },
  imgcontainer: {
    width: '40%',
    // borderWidth:1,
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 60,
  },
  deletView: {
    width: 25,
    height: 25,
    bottom: 0,
    left: -10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  EmptyImg: {
    width: '100%',
    height: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
