import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {Card} from '../scene/comp/card';
import {actionOne} from '../scene/redux/action/index';
import {connect} from 'react-redux';

const screenOne = ({route, navigation, actionOne}) => {
  const {arr} = route.params;
  const storeageData = async (item) => {
    actionOne(item);
    navigation.navigate('wish');
  };

  const RenderMessage = () => {
    if (arr.length > 0) {
      return (
        <View>
          <FlatList
            data={arr}
            renderItem={({item}) => {
              return (
                <Card>
                  <TouchableOpacity onPress={() => storeageData(item)}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{uri: item.image}}
                        style={{height: 60, width: 60, borderRadius: 5}}
                      />
                      <View
                        style={{
                          flexDirection: 'column',
                          padding: 10,
                        }}>
                        <Text>{item.product_name}</Text>
                        <Text>RS:{item.price}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Card>
              );
            }}
          />
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>
            Product Not Available
          </Text>
        </View>
      );
    }
  };
  return <View style={{flex: 1}}>{<RenderMessage />}</View>;
};

export default connect(null, {actionOne})(screenOne);
