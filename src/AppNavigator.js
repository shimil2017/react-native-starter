import React from "react";
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
  addNavigationHelpers
} from "react-navigation";

import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./tabs/Home";
import Settings from "./tabs/Settings";
import Profile from "./screens/Profile";
import Modal from "./screens/Modal";
import DrawerLayout from "./components/DrawerLayout";
//import { transitionConfig } from "./transition/transition";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignupScreen";
const { height, width } = Dimensions.get("window");

import { createStore, combineReducers } from "redux";
import { connect } from "react-redux";
// Stack navigation for Settings and Profile screens
const SettingsTab = StackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: null, // Hide the header
        headerBackTitle: "Back" // Title back button Back when we navigate to Profile from Settings
      }
    },
    Profile: {
      screen: Profile
    }
  },

  {
    headerMode: "screen"
  }
);

// Tab navigation for Home and Settings screens
const TabNavigation = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-home" : "ios-home"}
            size={20}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Settings: {
      screen: SettingsTab,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-settings" : "ios-settings"}
            size={20}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Settings2: {
      screen: SettingsTab,
      navigationOptions: {
        tabBarLabel: "Settin",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-settings" : "ios-settings"}
            size={20}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Settings3: {
      screen: SettingsTab,
      navigationOptions: {
        tabBarLabel: "Settin",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-settings" : "ios-settings"}
            size={20}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      showIcon: true,
      style: {
        width: width,
        height: 56,
        backgroundColor: "red"
      },

      indicatorStyle: {
        backgroundColor: "transparent"
      },
      labelStyle: {
        fontSize: 14,
        color: "white",
        fontFamily: "kohinoor",
        marginTop: -2,
        marginBottom: 18
      }
    },
    tabBarPosition: "bottom",

    order: ["Settings", "Home", "Settings2", "Settings3"]
  }
);

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator(
  {
    Tabs: {
      screen: TabNavigation
    }
  },
  {
    // Register custom drawer component
    contentComponent: props => <DrawerLayout {...props} />
  }
);

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
const AppNavigator = StackNavigator(
  {
    WelcomeScreen: { screen: WelcomeScreen },
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen },
    TabsWithDrawer: {
      screen: TabsWithDrawerNavigation
    },
    Modal: {
      screen: Modal
    }
  },
  {
    // In modal mode screen slides up from the bottom
    mode: "modal",
    // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
    headerMode: "none"
  }
);

export default AppNavigator;
