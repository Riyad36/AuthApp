import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationScreen from "./src/screens/NotificationScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CommentScreen from "./src/screens/CommentScreen";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import {createDrawerNavigator} from "@react-navigation/drawer"
import { AuthContext, AuthProvider } from "./src/Provider/AuthProvider";

import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator();
const AppDrawer = createDrawerNavigator();


const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="Home" component={HomeTabScreen} />
      <AppDrawer.Screen name="Profile" component={ProfileScreen} />
    </AppDrawer.Navigator>
  );
};



const HomeTabScreen = () => {
  return (

    <HomeTab.Navigator initialRouteName="Home">
      <HomeTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" color="white" size={26} />
            ) : (
                <AntDesign name="home" color="white" size={22} />
              ),
        }}
      />

      <HomeTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-notifications" size={26} color="white" />
            ) : (
                <Ionicons
                  name="ios-notifications-outline"
                  size={22}
                  color="white"
                />
              ),
        }}

      />

    </HomeTab.Navigator>


  )

}


const HomeStackScreen = () => {

  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Comments" component={ CommentScreen } options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  )
}


const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName='SignIn'>


      <AuthStack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />


    </AuthStack.Navigator>
  )


}

function App() {
  return (

    <AuthProvider>
      <AuthContext.Consumer>

        {(auth) => (

          <NavigationContainer>

            {auth.isLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}

          </NavigationContainer>)}

      </AuthContext.Consumer>

    </AuthProvider>
  );
};

export default App;
