import { NavigationContainer} from  '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
/* 1 //npm install @react-navigat
ion/drawer */

/* 2 expo install react-native-
gesture-handler react-native-reanimated */

/*In cas of problems npm install react-native-reanimated@1 --save --save-exact */

const Drawer =  createDrawerNavigator();

export default function App() {
  return <NavigationContainer>
     {/* <Drawer.Navigator screenOptions={{}}></Drawer.Navigator> */}
        <Drawer.Navigator initialRouteName='User' >
             <Drawer.Screen  name='Welcome' component={WelcomeScreen}/>
             <Drawer.Screen  name='User' component={UserScreen}/>
        </Drawer.Navigator>
  </NavigationContainer>
}
