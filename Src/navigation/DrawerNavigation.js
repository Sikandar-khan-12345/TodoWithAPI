import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/After_Login/Dashboard';
import Setting from '../screens/After_Login/Setting';
import Login from '../screens/Before_Login/Login';
import StudentsList from '../screens/After_Login/Students/StudentsList';
import CustomSidebarMenu from './CustomSidebarMenu';
import EmployesList from '../screens/After_Login/employes/EmployesList';
import ProductsList from '../screens/After_Login/products/ProductsList';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Students" component={StudentsList} />
      <Drawer.Screen name="Employees" component={EmployesList} />
      <Drawer.Screen name="Products" component={ProductsList} />
      <Drawer.Screen name="Setting" component={Setting} />
      {/* <Drawer.Screen name="LogOut" component={Login} /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
