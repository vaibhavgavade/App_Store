import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import ProductList from '../scene/constant/productlist.json';
import {Card} from '../scene/comp/card';

const {width, height} = Dimensions.get('window');
const homeScreen = (props) => {
  props.navigation.setOptions({
    headerLeft: () => <Button title="Abc" />,
  });
  console.log('', props.data);
  const {data} = ProductList;

  return (
    <View style={{backgroundColor: '#00fa9a', flex: 1}}>
      <View>
        <Image
          source={require('../scene/image/navsoft.jpg')}
          style={{
            width: width,
            height: height / 2.5,
            alignSelf: 'center',
          }}
        />
      </View>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <Card>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('one', {
                    arr: item.products,
                    name: item.name,
                    img: item.image,
                  })
                }>
                <Image
                  source={{uri: item.image}}
                  style={{height: 200, width: 200, borderRadius: 5}}
                />
              </TouchableOpacity>
              <Text style={{alignSelf: 'center'}}>{item.name}</Text>
            </Card>
          );
        }}
      />
    </View>
  );
};

export default homeScreen;
