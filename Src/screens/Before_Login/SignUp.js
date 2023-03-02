import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/UI/Input';
import FormContainer from '../../components/HOC/FormContainer';
import UiButton from '../../components/UI/UiButton';
import {isValidForm, validators} from '../../constents/Validation';
import Paragraph from '../../components/UI/Paragraph';
import {IconPath, ImagePath} from '../../Assets';
import Colors from '../../constents/Colors';
import Clickable from '../../components/HOC/Clickble';

const SignUp = ({navigation}) => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [number, setnumber] = useState('');
  const [gender, setgender] = useState('');
  const [error, seterror] = useState({});

  const SignUpWith = async () => {
    const valid = {
      FirstName: validators.checkRequire('First Name', firstname),
      LastName: validators.checkRequire('Last Name', lastname),
      Email: validators.checkEmail('Email', email),
      Password: validators.checkPassword('Password', password),
      Number: validators.checkPhoneNumber('Phone Number', number, 8, 12),
    };
    seterror(valid);
    if (isValidForm(valid)) {
      let body = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        number: number,
        gender: gender,
      };
      let data = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      };

      try {
        let results = await fetch(
          'https://light-pumps-seal.cyclic.app/DreamCoder/api/userAuth/signup',
          data,
        );

        let res = await results.json();
        let resData = await res;
        console.log('data=======>>', resData);

        if (resData.status == true) {
          navigation.navigate('DrawerNavigation');
        } else {
          alert('User Alrdy Exist');
        }
      } catch (err) {
        alert(err);
      }
    }
  };
  return (
    <FormContainer style={{padding: 10}}>
      <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
        <Image
          source={ImagePath.signupimg}
          style={{width: 300, height: 200}}
          resizeMode="contain"
        />
      </View>
      <View style={{height: 750}}>
        <Paragraph size={30} style={{marginVertical: 10, fontWeight: 'bold'}}>
          Register
        </Paragraph>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 30,
          }}>
          <Clickable
            style={styles.social}
            onPress={() => {
              Linking.openURL('https://www.google.com/');
            }}>
            <Image source={IconPath.google} style={styles.SocialIcon} />
          </Clickable>
          <Clickable
            style={styles.social}
            onPress={() => {
              Linking.openURL('https://www.facebook.com/');
            }}>
            <Image source={IconPath.facebook} style={styles.SocialIcon} />
          </Clickable>
          <Clickable
            style={styles.social}
            onPress={() => {
              Linking.openURL('https://twitter.com/');
            }}>
            <Image source={IconPath.twitter} style={styles.SocialIcon} />
          </Clickable>
        </View>
        <Paragraph
          textAlign="center"
          size={14}
          style={{
            fontWeight: 'bold',
            marginVertical: 10,
            bottom: 10,
            fontWeight: 'bold',
          }}
          color={Colors.smokegrey}>
          Or, register with email ...
        </Paragraph>

        <Input
          placeholder={'First Name'}
          onChange={setfirstname}
          error={error?.FirstName}
          style={{paddingLeft: 20}}
        />
        <View style={styles.IconContainer}>
          <Image source={IconPath.username} style={styles.Icon} />
        </View>

        <Input
          placeholder={'Last Name'}
          onChange={setlastname}
          error={error?.LastName}
          style={{paddingLeft: 20}}
        />
        <View style={styles.IconContainer}>
          <Image source={IconPath.username} style={styles.Icon} />
        </View>

        <Input
          placeholder={'Email'}
          onChange={setemail}
          error={error?.Email}
          style={{paddingLeft: 20}}
        />
        <View style={styles.IconContainer}>
          <Image source={IconPath.email} style={styles.Icon} />
        </View>
        <Input
          placeholder={'Password'}
          onChange={setpassword}
          error={error?.Password}
          keyboardType="number-pad"
          style={{paddingLeft: 20}}
        />
        <View style={styles.IconContainer}>
          <Image source={IconPath.lock} style={styles.Icon} />
        </View>

        <Input
          placeholder={'Number'}
          onChange={setnumber}
          error={error?.Number}
          keyboardType="number-pad"
          style={{paddingLeft: 20}}
        />
        <View style={styles.IconContainer}>
          <Image source={IconPath.number} style={styles.Icon} />
        </View>

        <Input
          placeholder={'Gender'}
          onChange={setgender}
          style={{paddingLeft: 20}}

          // error={error?.Number}
        />
        <View style={styles.IconContainer}>
          <Image source={IconPath.gender} style={{width: 15, height: 15}} />
        </View>

        <UiButton text="SignUp" onPress={() => SignUpWith()} />

        <Paragraph textAlign="center" style={{fontWeight: 'bold'}}>
          Already registered?{' '}
          <Paragraph
            onPress={() => navigation.navigate('Login')}
            color={Colors.purple}
            style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
            Login
          </Paragraph>
        </Paragraph>
      </View>
    </FormContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  IconContainer: {
    width: 20,
    position: 'relative',
    bottom: 40,
  },
  Icon: {
    width: 15,
    height: 15,
  },

  social: {
    borderWidth: 1,
    borderColor: Colors.gray,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 0,
    height: 45,
  },
  SocialIcon: {
    width: 28,
    height: 28,
  },
});
