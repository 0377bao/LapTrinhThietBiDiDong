import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './components/Home'
import Product from './components/Product'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{
          headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

