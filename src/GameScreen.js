import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {WelcomePageOne} from './components/WelcomeStartGamePages/welcome-page-one';
import {WelcomePageTwo} from './components/WelcomeStartGamePages/welcome-page-two';
import {WelcomePageThree} from './components/WelcomeStartGamePages/welcome-page-three';
import {WelcomePageFour} from './components/WelcomeStartGamePages/welcome-page-four';
import {Menu} from './components/MainMenu/main-menu-screen';
import {Quiz} from './components/MainMenu/StartQuiz/start-test';
import {Saved} from './components/MainMenu/SavedComponent/saved-screen';
import {UserProvider} from './user/Provider/UserProvider';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function GameScreen() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="WelcomePageOne"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="WelcomePageOne" component={WelcomePageOne} />
          <Stack.Screen name="WelcomePageTwo" component={WelcomePageTwo} />
          <Stack.Screen name="WelcomePageThree" component={WelcomePageThree} />
          <Stack.Screen name="WelcomePageFour" component={WelcomePageFour} />
          <Stack.Screen name="MainMenuScreen" component={Menu} />
          <Stack.Screen name="StartQuiz" component={Quiz} />
          <Stack.Screen name="SavedScreen" component={Saved} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
