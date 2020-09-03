import {TouchableOpacity} from 'react-native';
import {Appbar, Avatar, Text} from 'react-native-paper';

const Header = ({scene, previous, navigation}) => {
  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.surface}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
          color={theme.colors.primary}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image
            size={40}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
          />
        </TouchableOpacity>
      )}
    </Appbar.Header>
  );
};

export {Header};
