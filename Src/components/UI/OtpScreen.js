import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Colors from '../../constents/Colors';

const OtpScreen = ({navigation}) => {
  const firstinput = useRef();
  const secinput = useRef();
  const thirdinput = useRef();
  const forthinput = useRef();
  const fiveinput = useRef();
  const sixinput = useRef();

  const [otp, setotp] = useState({
    FirstInput: '',
    SecondInput: '',
    ThirdInput: '',
    FourthInput: '',
    FiveInput: '',
    SixInput: '',
  });
  return (
    <View>
      <View style={styles.MainBox}>
        <View style={styles.box}>
          <TextInput
            style={styles.OtpInp}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={b => {
              b && secinput.current.focus();

              // setotp({
              //   FirstInput: b,
              // });
            }}
            ref={firstinput}
          />
        </View>
        <View style={styles.box}>
          <TextInput
            style={styles.OtpInp}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={b => {
              b ? thirdinput.current.focus() : firstinput.current.focus();
              // setotp({FirstInput: otp.FirstInput, SecondInput: b});
            }}
            ref={secinput}
          />
        </View>

        <View style={styles.box}>
          <TextInput
            style={styles.OtpInp}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={b => {
              b ? forthinput.current.focus() : secinput.current.focus();
              // setotp({
              //   FirstInput: otp.FirstInput,
              //   SecondInput: otp.SecondInput,
              //   ThirdInput: b,
              // });
            }}
            ref={thirdinput}
          />
        </View>
        <View style={styles.box}>
          <TextInput
            style={styles.OtpInp}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={b => {
              b ? fiveinput.current.focus() : thirdinput.current.focus();
              // setotp({
              //   FirstInput: otp.FirstInput,
              //   SecondInput: otp.SecondInput,
              //   ThirdInput: b,
              // });
            }}
            ref={forthinput}
          />
        </View>
        <View style={styles.box}>
          <TextInput
            style={styles.OtpInp}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={b => {
              b ? sixinput.current.focus() : forthinput.current.focus();
              // setotp({
              //   FirstInput: otp.FirstInput,
              //   SecondInput: otp.SecondInput,
              //   ThirdInput: b,
              // });
            }}
            ref={fiveinput}
          />
        </View>

        <View style={styles.box}>
          <TextInput
            style={styles.OtpInp}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={b => {
              !b && fiveinput.current.focus();

              // b && navigation.navigate('Login')

              // setotp({
              //   FirstInput: otp.FirstInput,
              //   SecondInput: otp.SecondInput,
              //   ThirdInput: otp.ThirdInput,
              //   FourthInput: b,
              // });
            }}
            ref={sixinput}
          />
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  MainBox: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderWidth:1,
    marginVertical: 20,
    width: '100%',
    alignSelf: 'center',
  },
  box: {
    width: 50,
    height: 40,
    borderBottomWidth: 1,
    // borderRadius: 10,
    // backgroundColor: Colors.pink,
    // elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  OtpInp: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
