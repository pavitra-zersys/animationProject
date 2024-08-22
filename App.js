import DrawScreen from './src/screens/AnimationScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import GuessScreen from './src/screens/GuessScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Screen name="Home" component={HomeScreen} initialRouteName="" />
      <Stack.Screen name="Draw" component={DrawScreen} />
      <Stack.Screen name="Guess" component={GuessScreen} />
    </NavigationContainer>
  );
};

export default App;
