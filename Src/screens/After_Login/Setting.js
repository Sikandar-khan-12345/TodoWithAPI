import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Setting = () => {
  const Add = () => {
    let xyz = ['Zakir','Apple','Kick','Rohul','Ganga'];
    let abc = xyz.sort()
    console.log('=========>String SORT====>', abc);


    // let p = {a:1,b:2,c:3}
    // let q = {x:4,y:5,z:6}

    // p.push(...q)

    console.log('=>q=>',p);


    let xyz2 = [30,22,54,12,34,0,4,100,6]
    let abc2 = xyz2.sort()
    console.log('====Numricale Sort',abc2);


    let a = [1,2,3]
    let b =  [4,5,6]   
     a.push(...b)
    console.log('======>Merge Array======>',a);
  };

  let str = 'sikandar'

  let davika = ''

  for(let i= str.length-1;i>=0;i--){
davika += str[i]


  }
  return (
    <View>
      <Text style={{fontSize:30}}>{davika}</Text>

      <Button title="HELLO" onPress={() => Add()} />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
