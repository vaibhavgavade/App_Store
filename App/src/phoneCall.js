import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Linking,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
const phoneCall = () => {
  const onOpenContact = (item) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${item}`;
    } else {
      phoneNumber = `telprompt:${item}`;
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="user-circle" size={200} color={'#008000'} />
      </View>

      <View
        style={{
          width: width,
          height: 51,
          backgroundColor: 'red',
          bottom: 0,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => onOpenContact('+917447232829')}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Call me
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'green',
            position: 'absolute',
            alignSelf: 'flex-end',
            right: 10,
            bottom: 30,
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
          }}>
          <Icon name="phone" size={50} />
        </View>
      </View>
    </View>
  );
};

export default phoneCall;
