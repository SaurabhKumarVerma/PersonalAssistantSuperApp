import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CustomBottomTabBar from "./CustomTabBar"
import { bottomNavigation } from "./navigationData";
import React from "react";

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator()

  const CustomBottomTabs = (props: BottomTabBarProps) => {
    return <CustomBottomTabBar {...props} key={Math.random()} />
  }

  return (
    <Tab.Navigator
    id={undefined}
      initialRouteName={'Dashboard'}
      screenOptions={{ headerShown: false }}
      tabBar={CustomBottomTabs}
    >
      {
        bottomNavigation.map((item, index) => {
          return (
            <>
              <Tab.Screen
                key={index}
                name={item.bottomName}
                component={item.component}

              />
            </>
          )
        })
      }
    </Tab.Navigator>
  )
}

export default BottomNavigation
