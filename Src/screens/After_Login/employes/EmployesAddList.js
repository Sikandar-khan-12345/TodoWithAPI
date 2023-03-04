import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import FormContainer from '../../../components/HOC/FormContainer';
import Input from '../../../components/UI/Input';
import UiButton from '../../../components/UI/UiButton';
import {isValidForm, validators} from '../../../constents/Validation';
import Paragraph from '../../../components/UI/Paragraph';
import {ImagePath} from '../../../Assets';
import Clickable from '../../../components/HOC/Clickble';
import Colors from '../../../constents/Colors';

const EmployesAddList = () => {
  const [id, setid] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');
  const [dob, setdob] = useState('');
  const [employment, setemployment] = useState('');
  const [error, seterror] = useState({});

  const EmployesDataWithValidation = () => {
    const form = {
      ID: validators.checkRequire('ID', id),
      Name: validators.checkRequire('Employes Name', name),
      Email: validators.checkEmail('Employes Email', email),
      Address: validators.checkRequire('Employes Address', address),
      Dob: validators.checkRequire('Employes Dob', dob),
      Employment: validators.checkRequire('Employmnt', employment),
    };
    seterror(form);
    if (isValidForm(form)) {
      navigation.navigate('EmployesList');
    }
  };
  return (
    <FormContainer style={{padding: 10}}>
      <Clickable style={styles.Container1}>
        <Image
          source={ImagePath.Employees}
          style={styles.Img1}
          resizeMode="contain"
        />
      </Clickable>
      <Paragraph
        textAlign="center"
        size={20}
        color={Colors.purple}
        style={{fontWeight: 'bold', marginVertical: 10, bottom: 4}}>
        Add Employees Details
      </Paragraph>
      <View>
        <Input
          placeholder={'Employes Id'}
          onChange={setid}
          error={error?.ID}
          style={styles.inp}
        />
        <Input
          placeholder={'Employes Name'}
          onChange={setname}
          error={error?.Name}
          style={styles.inp}
        />
        <Input
          placeholder={'Employes Email'}
          onChange={setemail}
          error={error?.Email}
          style={styles.inp}
        />
        <Input
          placeholder={'Employes Address'}
          onChange={setaddress}
          error={error?.Address}
          style={styles.inp}
        />
        <Input
          placeholder={'Employes DOB'}
          onChange={setdob}
          error={error?.Dob}
          style={styles.inp}
        />
        <Input
          placeholder={'Employment'}
          onChange={setemployment}
          error={error?.Employment}
          style={styles.inp}
        />
      </View>

      <UiButton text="Add" onPress={() => EmployesDataWithValidation()} />
    </FormContainer>
  );
};

export default EmployesAddList;

const styles = StyleSheet.create({
  inp: {
    borderWidth: 1,
    borderRadius: 10,
    // height: 53,
    paddingLeft: 16,
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
    height: '100%',
    borderRadius: 20,
  },
});
