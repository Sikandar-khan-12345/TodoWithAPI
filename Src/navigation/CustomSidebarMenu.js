// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Paragraph from '../components/UI/Paragraph';

const CustomSidebarMenu = (props) => {
    // const BASE_PATH =
    //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
    // const proileImage = 'react_logo.png';

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/*Top Large Image */}
            <Image
                source={require('../Assets/images/sanaya.jpg')}
                style={styles.sideMenuProfileIcon}
            />
            <Paragraph textAlign='center' style={{marginVertical:10}}>
                 @ Sanaya Pathan 
            </Paragraph>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                {/* <DrawerItem
                    label="Students"
                    onPress={() => Linking.openURL('https://aboutreact.com/')}
                /> */}
                {/* <View style={styles.customItem}>
                    <Text
                        onPress={() => {
                            Linking.openURL('https://aboutreact.com/');
                        }}>
                        Rate Us
                    </Text>
                    <Image
                        source={{ uri: BASE_PATH + 'star_filled.png' }}
                        style={styles.iconStyle}
                    />
                </View> */}
            </DrawerContentScrollView>
            <Text
                style={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: 'grey'
                }}>
                Logout
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        marginVertical:10
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomSidebarMenu;