import * as Screens from '../screens'
import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

const StackNavigator = createStackNavigator({
    Home: {
        screen: Screens.HomeScreen
    },
    Login: {
        screen: Screens.LoginScreen
    },
    Dashboard: {
        screen: Screens.DashboardScreen
    },
})
  
const TabNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: StackNavigator
    },
    Profile: {
        screen: Screens.ProfileScreen
    }
})

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator
    },
    Profile: {
        screen: Screens.ProfileScreen
    }
})

const Navigator = createAppContainer(DrawerNavigator)

export default Navigator