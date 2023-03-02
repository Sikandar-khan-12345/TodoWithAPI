import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import FormContainer from '../../../components/HOC/FormContainer';
import Input from '../../../components/UI/Input';
import UiButton from '../../../components/UI/UiButton';
import {ImagePath} from '../../../Assets';
import Paragraph from '../../../components/UI/Paragraph';
import Clickable from '../../../components/HOC/Clickble';
import Colors from '../../../constents/Colors';
import {validators, isValidForm} from '../../../constents/Validation';

const StudentsAddList = ({navigation}) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [course, setcourse] = useState('');
  const [subject, setsubject] = useState('');
  const [number, setnumber] = useState('');
  const [gender, setgender] = useState('');
  const [country, setcountry] = useState('');
  const [scholl, setscholl] = useState('');
  const [error, seterror] = useState({});

  const AddWithValidationData = async () => {
    const form = {
      Name: validators.checkRequire('Students Name', name),
      Email: validators.checkEmail('Students Email', email),
      Course: validators.checkRequire('Students Course', course),
      Subject: validators.checkRequire('Students Subject', subject),
      Number: validators.checkRequire(' Number', number),
      Gender: validators.checkRequire('Gender', gender),
      Country: validators.checkRequire('Students Country', country),
      Scholl: validators.checkRequire('Students Scholl', scholl),
    };
    seterror(form);
    if (isValidForm(form)) {
      let body = {
        name: name,
        email: email,
        coursse: course,
        subject: subject,
        number: number,
        gender: gender,
        schoolname: scholl,
        country: country,
      };

      let data = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      };
      try {
        let results = await fetch(
          'https://light-pumps-seal.cyclic.app/DreamCoder/api/student',
          data,
        );

        let res = await results.json();
        let resdata = await res;
        if (resdata.status == true) {
          navigation.navigate('StudentsList');
        } else {
          alert('User Alrdy Exist');
        }

        console.log('=======Data======', resdata);
      } catch (err) {
        alert(err);
      }
    }
  };
  return (
    <FormContainer style={styles.MainContainer}>
      <Clickable style={styles.Container1}>
        <Image
          source={ImagePath.Students}
          style={styles.Img1}
          resizeMode="contain"
        />
      </Clickable>
      <Paragraph
        textAlign="center"
        size={20}
        color={Colors.purple}
        style={{fontWeight: 'bold', marginVertical: 10, bottom: 4}}>
        Add Students Details
      </Paragraph>
      <View>
        <Input
          label=""
          placeholder={'Students Name...'}
          style={styles.inp}
          onChange={setname}
          error={error?.Name}
        />
        <Input
          label=""
          placeholder={'Students Email...'}
          style={styles.inp}
          onChange={setemail}
          error={error?.Email}
        />
        <Input
          label=""
          placeholder={'Students Course...'}
          style={styles.inp}
          onChange={setcourse}
          error={error?.Course}
        />
        <Input
          placeholder={'Students Subject...'}
          style={styles.inp}
          onChange={setsubject}
          error={error?.Subject}
        />
        <Input
          label=""
          placeholder={'Number...'}
          style={styles.inp}
          keyboardType="number-pad"
          onChange={setnumber}
          error={error?.Number}
        />
        <Input
          label=""
          placeholder={'Gender'}
          style={styles.inp}
          onChange={setgender}
          error={error?.Gender}
        />
        <Input
          label=""
          placeholder={'Country'}
          style={styles.inp}
          onChange={setcountry}
          error={error?.Country}
        />
        <Input
          label=""
          placeholder={'Students Scholl'}
          style={styles.inp}
          onChange={setscholl}
        />
        <UiButton
          text="Add"
          onPress={() => AddWithValidationData()}
          style={styles.inp}
        />
      </View>
    </FormContainer>
  );
};

export default StudentsAddList;

const styles = StyleSheet.create({
  MainContainer: {
    paddingHorizontal: 10,
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
  inp: {
    borderWidth: 1,
    borderRadius: 10,
  },
});
