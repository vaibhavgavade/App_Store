import React from 'react';
import {View} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';

const drawerItem = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{flex: 1}}>
        <Drawer.Section style={{marginTop: 10}}>
          <DrawerItem
            label="WishList"
            onPress={() => props.navigation.navigate('wish')}
          />
          <DrawerItem
            label="Phone call"
            onPress={() => props.navigation.navigate('phone')}
          />
          <DrawerItem
            label="Email send"
            onPress={() => props.navigation.navigate('Email')}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

export default drawerItem;
