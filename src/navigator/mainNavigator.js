import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2165535Navigator from '../features/BlankScreen2165535/navigator';
import BlankScreen1165534Navigator from '../features/BlankScreen1165534/navigator';
import BlankScreen0165533Navigator from '../features/BlankScreen0165533/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2165535: { screen: BlankScreen2165535Navigator },
BlankScreen1165534: { screen: BlankScreen1165534Navigator },
BlankScreen0165533: { screen: BlankScreen0165533Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
