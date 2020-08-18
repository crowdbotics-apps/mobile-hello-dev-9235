import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen310117Navigator from '../features/BlankScreen310117/navigator';
import BlankScreen210115Navigator from '../features/BlankScreen210115/navigator';
import BlankScreen110114Navigator from '../features/BlankScreen110114/navigator';
import BlankScreen010113Navigator from '../features/BlankScreen010113/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen310117: { screen: BlankScreen310117Navigator },
BlankScreen210115: { screen: BlankScreen210115Navigator },
BlankScreen110114: { screen: BlankScreen110114Navigator },
BlankScreen010113: { screen: BlankScreen010113Navigator },

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
