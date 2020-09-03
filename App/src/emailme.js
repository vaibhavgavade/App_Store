import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import qs from 'qs';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
const EmailMe = () => {
  const sendEmail = (to, subject) => {
    let url = `mailto:${to}`;
    const query = qs.stringify({
      subject: subject,
    });
    console.log('test query', query);
    if (query.length) {
      url += `?${query}`;
    }
    return Linking.openURL(url);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="envelope" size={200} color={'#dc143c'} />
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
        <TouchableOpacity
          onPress={() =>
            sendEmail('vaibhav0413@gmail.com', 'Customer Care').then(() => {
              console.log('Your message was successfully sent!');
            })
          }>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Send Email
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
          <Icon name="at" size={50} color={'#66cdaa'} />
        </View>
      </View>
    </View>
  );
};

export default EmailMe;
