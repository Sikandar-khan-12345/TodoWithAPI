import {StyleSheet, Text, View, Image, Share, Alert, StatusBar} from 'react-native';
import React from 'react';
import Paragraph from '../../../components/UI/Paragraph';
import ViewContainer from '../../../components/HOC/ViewContainer';
import {IconPath, ImagePath} from '../../../Assets';
import Colors from '../../../constents/Colors';
import ScrollContainer from '../../../components/HOC/ScrollContainer';
import Clickable from '../../../components/HOC/Clickble';

const EmployesDetails = ({route, navigation}) => {
  const EmployeData = route?.params?.data?.item;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: EmployeData.Employname,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <ScrollContainer>
      <ViewContainer
        style={{flex: 1, padding: 10, backgroundColor: Colors.smokWhite}}>
          <StatusBar backgroundColor={Colors.smokWhite} barStyle="dark-content" />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Clickable onPress={() => navigation.goBack()} style={styles.GoBack}>
            <Image source={IconPath.back} style={{width: 20, height: 20}} />
          </Clickable>
          <Clickable onPress={() => onShare()} style={styles.OnShare}>
            <Image source={IconPath.share} style={{width: 20, height: 20}} />
          </Clickable>
        </View>
        <View style={styles.EmployesImgBox}>
          <Image
            source={ImagePath.Employees1}
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View>
          <View style={styles.Detailstxtbox}>
            <Paragraph
              color={Colors.purple}
              size={20}
              style={{fontWeight: 'bold'}}>
              EMPLOYES DETAILS
            </Paragraph>
          </View>

          <View>
            <Paragraph style={{paddingVertical: 10, fontWeight: 'bold'}}>
              Employe ID :
              <Paragraph>
                {'\n'}
                {EmployeData.Employid}
              </Paragraph>
            </Paragraph>

            <Paragraph style={{paddingVertical: 10, fontWeight: 'bold'}}>
              Employe Name :
              <Paragraph>
                {'\n'}
                {EmployeData.Employname}
              </Paragraph>
            </Paragraph>

            <Paragraph style={{paddingVertical: 10, fontWeight: 'bold'}}>
              Employe Email :
              <Paragraph>
                {'\n'}
                {EmployeData.Employemail}
              </Paragraph>
            </Paragraph>

            <Paragraph style={{paddingVertical: 10, fontWeight: 'bold'}}>
              Employe Number :
              <Paragraph>
                {'\n'}
                {EmployeData.Employnumber}
              </Paragraph>
            </Paragraph>

            <Paragraph style={{paddingVertical: 10, fontWeight: 'bold'}}>
              Employe Address :
              <Paragraph>
                {'\n'}
                {EmployeData.Employaddress}
              </Paragraph>
            </Paragraph>

            <Paragraph style={{paddingVertical: 10, fontWeight: 'bold'}}>
              Employe DOB:
              <Paragraph>
                {'\n'}
                {EmployeData.Employdob}
              </Paragraph>
            </Paragraph>

            <Paragraph style={{paddingVertical: 10, fontWeight: 'bold'}}>
              Employement :
              <Paragraph>
                {'\n'}
                {EmployeData.Employment}
              </Paragraph>
            </Paragraph>
          </View>
        </View>
      </ViewContainer>
    </ScrollContainer>
  );
};

export default EmployesDetails;

const styles = StyleSheet.create({
  GoBack: {
    // borderWidth: 1,
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  OnShare: {
    // borderWidth: 1,
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  EmployesImgBox: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    // borderWidth:1
  },
  Detailstxtbox: {
    // borderWidth: 1,
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
});
