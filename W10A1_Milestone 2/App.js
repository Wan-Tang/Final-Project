import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './components/HomePage';
import LoadingPage from './components/LoadingPage';
import SelectedConcertPage from './components/SelectedConcertPage';
import LoginPage from './components/LoginPage';



export default function App() {

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

  return(
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingPage}/>
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="Concert" component={SelectedConcertPage}/>
        <Stack.Screen name="Login" component={LoginPage}/>
      </Stack.Navigator>
     </NavigationContainer>

//  <NavigationContainer>
//    <Tabs.Navigator>
//         <Tabs.Screen name="Home" component={HomePage}/>
//       </Tabs.Navigator>
    
//  </NavigationContainer>
// <NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

