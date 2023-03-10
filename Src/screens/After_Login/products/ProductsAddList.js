import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FormContainer from '../../../components/HOC/FormContainer';
import Input from '../../../components/UI/Input';
import UiButton from '../../../components/UI/UiButton';
import {isValidForm, validators} from '../../../constents/Validation';
import Clickable from '../../../components/HOC/Clickble';
import {ImagePath} from '../../../Assets';
import Colors from '../../../constents/Colors';
import Paragraph from '../../../components/UI/Paragraph';

const ProductsAddList = ({navigation}) => {
  const [btnloder, setbtnloder] = useState(false);
  const [title, settitle] = useState('');
  const [dis, setdis] = useState('');
  const [price, setprice] = useState('');
  const [rating, setrating] = useState('');
  const [color, setcolor] = useState('');
  const [img, setimg] = useState('');
  const [error, seterror] = useState({});

  const AddWithValidation = async () => {
    setbtnloder(true);
    let form = {
      Title: validators.checkRequire('TItle', title),
      Dis: validators.checkRequire('Dis', dis),
      Price: validators.checkRequire('Price', price),
      Rating: validators.checkRequire('Rating', rating),
      Color: validators.checkRequire('Color', color),
      Img: validators.checkRequire('Image URL', img),
    };
    seterror(form);
    if (isValidForm(form)) {
      let body = {
        title: title,
        dis: dis,
        price: price,
        reting: rating,
        color: color,
        img: img,
      };
      let Data = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      };

      try {
        let resultsApi = await fetch(
          'https://light-pumps-seal.cyclic.app/DreamCoder/api/addProducts',
          Data,
        );
        let res = await resultsApi.json();
        let resData = await res;

        setbtnloder(false);

        navigation.navigate('ProductsList');

        console.log('============>', resData);
      } catch (err) {
        alert(err);
      }
    }
  };
  return (
    <FormContainer style={{padding: 10}}>
      <Clickable style={styles.Container1}>
        <Image
          source={ImagePath.products}
          style={styles.Img1}
          resizeMode="contain"
        />
      </Clickable>
      <Paragraph
        textAlign="center"
        size={20}
        color={Colors.purple}
        style={{fontWeight: 'bold', marginVertical: 10, bottom: 4}}>
        Add Products Details
      </Paragraph>
      <View>
        <Input
          placeholder={'Products Title'}
          onChange={settitle}
          error={error?.Title}
          style={styles.inp}
        />
        <Input
          placeholder={'Products Description'}
          onChange={setdis}
          error={error?.Dis}
          style={styles.inp}
        />
        <Input
          placeholder={'Products Price'}
          onChange={setprice}
          error={error?.Price}
          style={styles.inp}
        />
        <Input
          placeholder={'Products Rating'}
          onChange={setrating}
          error={error?.Rating}
          style={styles.inp}
        />
        <Input
          placeholder={'Products Color'}
          onChange={setcolor}
          error={error?.Color}
          style={styles.inp}
        />
        <Input
          placeholder={'Products Image URL'}
          onChange={setimg}
          error={error?.Img}
          style={styles.inp}
        />
        <UiButton
          text="Add"
          onPress={() => AddWithValidation()}
          loading={btnloder}
        />
      </View>
    </FormContainer>
  );
};

export default ProductsAddList;

const styles = StyleSheet.create({
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
    height: '100%',
    borderRadius: 20,
  },
  inp: {
    borderWidth: 1,
    borderRadius: 10,
   
  },
});
