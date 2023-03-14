import {StyleSheet, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import FormContainer from '../../../components/HOC/FormContainer';
import Input from '../../../components/UI/Input';
import UiButton from '../../../components/UI/UiButton';
import {ImagePath} from '../../../Assets';
import Paragraph from '../../../components/UI/Paragraph';
import Clickable from '../../../components/HOC/Clickble';
import Colors from '../../../constents/Colors';
import {validators, isValidForm} from '../../../constents/Validation';
import Dropdown from '../../../components/UI/Dropdown';
import {useIsFocused} from '@react-navigation/native';

const StudentsAddList = ({navigation, route}) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [course, setcourse] = useState('');
  const [subject, setsubject] = useState('');
  const [number, setnumber] = useState('');
  const [gender, setgender] = useState('');
  const [country, setcountry] = useState('');
  const [scholl, setscholl] = useState('');
  const [error, seterror] = useState({});
  const [loader, setloader] = useState(false);
  const [SubjectData, setSubjectData] = useState([]);
  const [CourseData, setCourseData] = useState([]);
  const [CountryData, setCountryData] = useState([]);
  const [CountrySchool, setCountrySchool] = useState([]);

  const EditData = route?.params?.data;

  useEffect(() => {
    GetCoures();
    GetCountry();
    GetStudentseditData();
  }, [useIsFocused()]);

  const GetStudentseditData = () => {
    if (EditData) {
      setname(EditData.name);
      setemail(EditData.email);
      setnumber(EditData.number);
      setcourse(EditData.course)
      setsubject(EditData.subject)
      setgender(EditData.gender)
      setcountry(EditData.country)
      setscholl(EditData.scholl)
    }
  };

  const GetCoures = async () => {
    try {
      let results = await fetch(
        'https://light-pumps-seal.cyclic.app/DreamCoder/api/Course',
      );

      let res = await results.json();
      resData = await res;

      let Data = resData.message;

      let arr = [];

      Data.map((item, index) => {
        let obj = {
          label: item.CourseName,
          value: item.CourseName + '*' + item._id,
          color: 'black',
        };
        arr.push(obj);
      });
      setCourseData(arr);
      console.log('============arr=========>', arr);
    } catch (err) {
      alert(err);
      // console.log("============>",err);
    }
  };
  const GetCountry = async () => {
    try {
      let results = await fetch(
        'https://light-pumps-seal.cyclic.app/DreamCoder/api/Country',
      );
      let res = await results.json();
      let resData = await res;
      // console.log('==course  ==== resData==>', resData);
      Data = resData.message;

      let arr = [];

      Data.map((item, index) => {
        let obj = {
          label: item.CountryCode + ' ' + item.CountryName,
          value: item.CountryCode + '*' + item._id,
          color: 'black',
        };
        arr.push(obj);
      });
      setCountryData(arr);
    } catch (err) {
      // console.log('==============>',err);
      alert(err);
    }
  };

  const AddWithValidationData = async () => {
    setloader(true);

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
        course: course,
        subject: subject,
        number: number,
        gender: gender,
        schoolname: scholl,
        country: country,
      };

      console.log('======BODY====>', body);

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
        setloader(false);
        if (resdata.status == true) {
          navigation.navigate('StudentsList');
        } else {
          alert('Please Enter Correct Details');
        }

        console.log('=======Data======', resdata);
      } catch (err) {
        alert(err);
      }
    }
  };

  const CourseFunction = async idName => {
    if (!idName) {
      idName = 'Basic Course*6402309fd1e8ae3f6acd8a88';
    } else {
      idName = idName;
    }
    let NewData = idName.split('*');
    console.log('=====>>NewData', NewData);
    setcourse(NewData[0]);

    try {
      let results = await fetch(
        `https://light-pumps-seal.cyclic.app/DreamCoder/api/Course/${NewData[1]}`,
      );
      let res = await results.json();
      let resData = await res;
      console.log('====resdata==>', resData);

      let Data = resData.Subjects;

      let arr = [];

      Data.map((item, index) => {
        let obj = {
          label: item,
          value: item,
          color: 'black',
        };
        arr.push(obj);
      });
      setSubjectData(arr);
      // console.log('===========>',arr);
    } catch (err) {
      // alert(err);
      console.log('====catch=====>', err);
    }
    // console.log('=========>',NewData);
  };

  const CountryFunction = async i => {
    if (!i) {
      i = '+91 INDIA*6402286daf37e295673020e2';
    } else {
      i = i;
    }
    let Newdata = i.split('*');
    setcountry(Newdata[0]);

    // console.log('========>',Newdata);

    try {
      let results = await fetch(
        `https://light-pumps-seal.cyclic.app/DreamCoder/api/Country/${Newdata[1]}`,
      );
      let res = await results.json();
      let resData = await res;

      let Data = resData.SchoolNames;

      let arr = [];

      Data.map((item, index) => {
        let obj = {
          label: item,
          value: item,
          color: 'black',
        };
        arr.push(obj);
      });
      setCountrySchool(arr);
    } catch (err) {
      console.log('==========>', err);
      alert(err);
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
          placeholder={'Students Name'}
          style={styles.inp}
          onChange={setname}
          error={error?.Name}
          value={name}
        />
        <Input
          label=""
          placeholder={'Students Email'}
          style={styles.inp}
          onChange={setemail}
          error={error?.Email}
          value={email}
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.purple,
            marginVertical: 10,
            padding: 0,
            borderRadius: 10,
          }}>
          <Dropdown
            item={CourseData}
            placeholder={'Students Course'}
            onChange={e => CourseFunction(e)}
            value = {course}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.purple,
            marginVertical: 10,
            padding: 0,
            borderRadius: 10,
          }}>
          <Dropdown
            item={SubjectData}
            placeholder={'Student Subject'}
            onChange={e => setsubject(e)}
          />
        </View>
        <Input
          label=""
          placeholder={'Number'}
          style={styles.inp}
          keyboardType="number-pad"
          onChange={setnumber}
          error={error?.Number}
          value={number}
        />

        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.purple,
            marginVertical: 10,
            borderRadius: 10,
          }}>
          <Dropdown
            item={[
              {label: 'Male', value: 'Male', color: Colors.black},
              {label: 'Femal', value: 'Femal', color: Colors.black},
            ]}
            placeholder={'Gender'}
            onChange={e => setgender(e)}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.purple,
            marginVertical: 10,
            borderRadius: 10,
          }}>
          <Dropdown
            item={CountryData}
            placeholder={'Country'}
            onChange={e => CountryFunction(e)}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.purple,
            marginVertical: 10,
            borderRadius: 10,
          }}>
          <Dropdown
            item={CountrySchool}
            placeholder={'Students School'}
            onChange={e => setscholl(e)}
          />
        </View>

        <UiButton
          text="Add"
          onPress={() => AddWithValidationData()}
          style={styles.inp}
          loading={loader}
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
    height: 53,
    paddingLeft: 16,
  },
});
