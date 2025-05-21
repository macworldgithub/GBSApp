import Chat from "../Screens/Chat";
import Profile from "../Screens/Profile";

import HomeStackScreen from "./HomeStackNavigation";
import HistoryStackScreen from "./FavoriteStackNavigation";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../Components/CustomTabBar";


const Tab = createBottomTabNavigator();

export default function AuthTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}  tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Chat" component={Chat}/>
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
