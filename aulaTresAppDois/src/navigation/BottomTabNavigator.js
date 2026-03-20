import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DashboardScreen from "../screens/DashboardScreen";

import {Ionicons} from '@expo-vector-icons'
import NotificationsScreen from "../screens/NotificationsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return(
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={ ({route}) =>  ({
                headerTitleAlign : 'center',
                tabBarActiveTintColor: '#6c63ff',
                tabBarInactiveTintColor: '#999',
                tabBarStyle: {height: 75, paddingBottom: 8 , paddingTop: 8},
                tabBarLabelStyle: {fontSize: 12},
                tabBarIcon: ({focused, Color, size}) => {
                    let iconName = ' ellipse';

                    if(route.name === 'Dashboard') iconName = focused ? 'home' : 'home-outline';


                    if( route.name === 'Notifications') iconName = focused ? 'notifications' : 'notifications-outline'

                    return <Ionicons
                        name={iconName}
                        size={size}
                        color={color}
                    />
                }
            })}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
            />

            <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
        </Tab.Navigator>
    )
}