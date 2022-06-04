import { NavigationContainer} from  '@react-navigation/native';
/* import {createDrawerNavigator} from '@react-navigation/drawer'; */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import {Ionicons} from '@expo/vector-icons';

/* 1 //npm install @react-navigat
ion/drawer */

/* 2 expo install react-native-
gesture-handler react-native-reanimated */

/*In cas of problems npm install react-native-reanimated@1 --save --save-exact */

/* npm install @react-navigat
ion/bottom-tabs */

/* const Drawer =  createDrawerNavigator(); */
const BottomTab = createBottomTabNavigator();


export default function App() {
  return <NavigationContainer>
     {/* <Drawer.Navigator screenOptions={{}}></Drawer.Navigator> */}
        <BottomTab.Navigator screenOptions={{
           headerStyle: {backgroundColor: '#3c0a6b'},
           headerTinColor: 'white',
           tabBarActiveTintColor: '#3c0a6b'
           
          // drawerStyle: {backgroundColor: "#ccc"}
        }} >
             <BottomTab.Screen  name='Welcome' component={WelcomeScreen} options={{
                  tabBarIcon: ({color, size}) => <Ionicons  name='home'  color={color} size={size}/> 
               
             }}/>
             <BottomTab.Screen  name='User' component={UserScreen} options={{
                   tabBarIcon: ({color, size}) => <Ionicons  name='person'  color={color} size={size}/>
             }}/>
        </BottomTab.Navigator>
  </NavigationContainer>
}
