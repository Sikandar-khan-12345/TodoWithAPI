import {StyleSheet, View, Image, Linking} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/UI/Input';
import UiButton from '../../components/UI/UiButton';
import {isValidForm, validators} from '../../constents/Validation';
import FormContainer from '../../components/HOC/FormContainer';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import Clickable from '../../components/HOC/Clickble';
import {IconPath, ImagePath} from '../../Assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState({});
  const [loder, setloder] = useState(false);
  const [Eye, setEye] = useState(IconPath.offEye);

  // useEffect(() => {
  //   checkToken();
  // }, [useIsFocused()]);

  // const checkToken = async() => {
  //   let TokenData = await AsyncStorage.getItem('Token')

  //   if(TokenData){
  //     navigation.navigate('DrawerNavigation');
  //   }
  // };

  const LoginWith = async () => {
    setloder(true);
    const form = {
      Email: validators.checkEmail('Email', email),
      Password: validators.checkPassword('Password', password),
    };
    seterror(form);
    if (isValidForm(form)) {
      let body = {
        email: email,
        password: password,
      };
      let data = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      };

      try {
        let results = await fetch(
          'https://light-pumps-seal.cyclic.app/DreamCoder/api/userAuth/login',
          data,
        );

        let res = await results.json();
        let resData = await res;
        setloder(false);

        console.log(resData);

        if (resData.status == true) {
          await AsyncStorage.setItem('Token', JSON.stringify(resData.token));
          navigation.navigate('DrawerNavigation');
        } else {
          alert('Invalid Details');
        }
      } catch (err) {
        alert(err);
      }
    }
  };

  const EyeChenge = () => {
    let Icon = Eye == IconPath.offEye ? IconPath.onEye : IconPath.offEye;

    setEye(Icon);
  };
  return (
    <FormContainer style={{padding: 10}}>
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',

          height: 200,
        }}>
        <Image
          source={ImagePath.loginimg}
          style={{transform: [{rotate: '-5deg'}], width: 300, height: 200}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flex: 1,

          justifyContent: 'center',
        }}>
        <Paragraph size={30} style={{marginVertical: 20, fontWeight: 'bold'}}>
          LOGIN
        </Paragraph>

        <Input
          label="Email"
          placeholder={'Email'}
          error={error?.Email}
          onChange={setemail}
          style={{paddingLeft: 20, width: '98%'}}
        />
        <View style={{width: 20, position: 'relative', bottom: 40}}>
          <Image source={IconPath.email} style={{width: 15, height: 15}} />
        </View>
        <View>
          <Input
            label=""
            placeholder={'Password'}
            error={error?.Password}
            onChange={setpassword}
            secureTextEntry = {Eye == IconPath.offEye ? true:false}
            style={{paddingLeft: 20, width: '89%'}}
          />
          <Image
            source={IconPath.lock}
            style={{position: 'relative', bottom: 40, width: 15, height: 15}}
          />
        </View>
        <Clickable style={styles.EyeClick} onPress={() => EyeChenge()}>
          <Image source={Eye} style={styles.Eye} />
        </Clickable>

        <UiButton text="Login" onPress={() => LoginWith()} loading={loder} />

        <Paragraph
          textAlign="center"
          size={14}
          style={{fontWeight: 'bold'}}
          color={Colors.smokegrey}>
          Or, Login With ...
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
          style={{marginVertical: 10, fontWeight: 'bold'}}>
          New to the app?{' '}
          <Paragraph
            onPress={() => navigation.navigate('SignUp')}
            color={Colors.purple}
            style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
            SignUp
          </Paragraph>
        </Paragraph>
      </View>
    </FormContainer>
  );
};
export default Login;

const styles = StyleSheet.create({
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
  Eye: {
    width: 20,
    height: 20,
    top: 2,
  },
  EyeClick: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.purple,
    width: '10%',
    position: 'relative',
    bottom: 65.5,
    alignSelf: 'flex-end',
    right: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
