import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './src/Screens/Splash';
import Onboarding from './src/Screens/Onboarding';
import OnboardingTwo from './src/Screens/OnboardingTwo';


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
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer);
  }, [splashOpacity]);

  if (showSplash) {
    return (
      <Animated.View style={{ flex: 1, opacity: splashOpacity }}>
        <Splash />
      </Animated.View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
