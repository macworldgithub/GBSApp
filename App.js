import React from 'react';
import { View, Text } from 'react-native';
import Splash from './src/Screens/Splash'; // Adjust path if needed
import Onboarding from './src/Screens/Onboarding';
import OnboardingTwo from './src/Screens/OnboardingTwo';

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
    <OnboardingTwo />
  );
}
