import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// ✅ Screens
import Splash from './src/Screens/Splash';
import Onboarding from './src/Screens/Onboarding';
import OnboardingTwo from './src/Screens/OnboardingTwo';
import Home from './src/Screens/Home';
import Signup from './src/auth/Signup';
import Signin from './src/auth/Signin';
import SearchEvent from './src/Screens/SearchEvent';
import Notification from './src/Screens/Notification';
import UpcomingEvent from './src/Screens/UpcomingEvent';
import PopularEvent from './src/Screens/PopularEvent';
import DetailEvent from './src/Screens/DetailEvent';
import MemberLocation from './src/Screens/MemberLocation';
// import ProfileScreen from './src/Screens/ProfileScreen';
const Stack = createStackNavigator();
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const splashOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(splashOpacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setShowSplash(false);
      });
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: splashOpacity }]}>
        <Splash />
      </Animated.View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Signin' component={Signin}/>
        <Stack.Screen name="SearchEvent" component={SearchEvent} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="UpcomingEvent" component={UpcomingEvent} />
        <Stack.Screen name="PopularEvent" component={PopularEvent} />
        <Stack.Screen name="DetailEvent" component={DetailEvent} />
        <Stack.Screen name="MemberLocation" component={MemberLocation} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
  },
});

