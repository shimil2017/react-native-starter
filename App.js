import React from "react";
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator
} from "react-navigation";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./src/tabs/Home";
import Settings from "./src/tabs/Settings";
import Profile from "./src/screens/Profile";
import Modal from "./src/screens/Modal";
import Drawer from "./src/components/Drawer";
import { transitionConfig } from "./src/transition/transition";
const { height, width } = Dimensions.get("window");
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
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        // Customize header's title with user name passed to navigate()
        // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
        title: `${navigation.state.params.user}'s Profile`
      })
    }
  },

  {
    headerMode: "screen",
    transitionConfig
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
    transitionConfig,
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
    contentComponent: props => <Drawer {...props} />
  }
);

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
export default StackNavigator(
  {
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
    headerMode: "none",
    transitionConfig
  }
);
