import { NavigationContainer} from  '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import {Ionicons} from '@expo/vector-icons';

/* 1 //npm install @react-navigat
ion/drawer */

/* 2 expo install react-native-
gesture-handler react-native-reanimated */

/*In cas of problems npm install react-native-reanimated@1 --save --save-exact */

const Drawer =  createDrawerNavigator();

export default function App() {
  return <NavigationContainer>
     {/* <Drawer.Navigator screenOptions={{}}></Drawer.Navigator> */}
        <Drawer.Navigator screenOptions={{
           headerStyle: {backgroundColor: '#3c0a6b'},
           headerTinColor: 'white' ,
           drawerInactiveBackgroundColor: "#f0e1ff",
           drawerInactiveTintColor: '#3c0a6b',
          // drawerStyle: {backgroundColor: "#ccc"}
        }} >
             <Drawer.Screen  name='Welcome' component={WelcomeScreen} options={{
              
               drawerLabel: 'Welcome Screen',
               drawerIcon: ({color, size}) => (
                      <Ionicons  name='home' color={color} size={size}/>
               )
              
             }}/>
             <Drawer.Screen  name='User' component={UserScreen} options={{
               drawerIcon: ({color, size}) => (
                 <Ionicons name='person' color={color} size={size} />
               )
             }}/>
        </Drawer.Navigator>
  </NavigationContainer>
}
