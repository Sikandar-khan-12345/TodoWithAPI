import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtomTab from './ButtomTab';
import Login from '../screens/Before_Login/Login';
import SignUp from '../screens/Before_Login/SignUp';
import Dashboard from '../screens/After_Login/Dashboard';
import DrawerNavigation from './DrawerNavigation';
import StudentsAddList from '../screens/After_Login/Students/StudentsAddList';
import StudentsList from '../screens/After_Login/Students/StudentsList';
import EmployesList from '../screens/After_Login/employes/EmployesList';
import EmployesAddList from '../screens/After_Login/employes/EmployesAddList';
import EmployesDetails from '../screens/After_Login/employes/EmployesDetails';
const Stack = createNativeStackNavigator();

const Routs = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen
          name="Home"
          component={ButtomTab}
          options={{headerShown: false}}
        />
      
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StudentsAddList"
          component={StudentsAddList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StudentsList"
          component={StudentsList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EmployesList"
          component={EmployesList}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="EmployesDetails"
          component={EmployesDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmployesAddList"
          component={EmployesAddList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routs;
