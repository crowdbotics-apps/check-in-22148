import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial3165935Navigator from '../features/Tutorial3165935/navigator';
import SignUp23165536Navigator from '../features/SignUp23165536/navigator';
import BlankScreen2165535Navigator from '../features/BlankScreen2165535/navigator';
import BlankScreen0165533Navigator from '../features/BlankScreen0165533/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial3165935: { screen: Tutorial3165935Navigator },
SignUp23165536: { screen: SignUp23165536Navigator },
BlankScreen2165535: { screen: BlankScreen2165535Navigator },
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
