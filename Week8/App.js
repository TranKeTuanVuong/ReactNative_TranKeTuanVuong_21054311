import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import batdau from './man1';
import Man2 from './man2';
import Man3 from './man3';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={batdau} />
        <Stack.Screen name="Man2" component={Man2} />
        <Stack.Screen name="Man3" component={Man3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


