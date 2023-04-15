import React from 'react';
import CustomDrawerComponent from '../Component/CustomDrawerComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from '../Config/Theme';
import BottomNavigator from './BottomNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType : 'slide',
            drawerPosition : 'right',
            headerShown : false,
            overlayColor : Colors.TRANSPARENT
        }}
        drawerContent={props => <CustomDrawerComponent {...props} />}
    >
        <Drawer.Screen
            name='BottomNavigator'
            component={BottomNavigator}
        />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator