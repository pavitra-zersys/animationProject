import {View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {drawIcon} from '../assests';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={drawIcon} />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
