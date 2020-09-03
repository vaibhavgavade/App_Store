import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Card} from '../scene/comp/card';
import {deleteItem} from '../scene/redux/action';
import Icon from 'react-native-vector-icons/FontAwesome';
const WishList = (props) => {
  const {data} = props;

  var myData = data.reduce((unique, o) => {
    if (!unique.some((obj) => obj.price === o.price && obj.id === o.id)) {
      unique.push(o);
    }
    return unique;
  }, []);

  const deleteItem = (id) => {
    props.deleteItem(id);
  };

  if (myData.length > 0) {
    return (
      <View>
        <FlatList
          data={myData}
          keyExtractor={(key) => key.id}
          renderItem={({item}) => {
            return (
              <Card>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
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
                  <TouchableOpacity onPress={() => deleteItem(item.id)}>
                    <Icon name={'trash'} size={50} color={'red'} />
                  </TouchableOpacity>
                </View>
              </Card>
            );
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          WishList Cart Empty
        </Text>
      </View>
    );
  }
};
const mapStateToProps = (state) => {
  console.log('test state', state);
  return {data: state.redu1};
};
export default connect(mapStateToProps, {deleteItem})(WishList);
