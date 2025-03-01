/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text } from "react-native"

import { Ionicons } from "@expo/vector-icons"
import Animated from "react-native-reanimated"

interface IBottomIcon {
  isFocused: boolean
  routeName: string
  index: number
}

type RouteNames = "Home" | "Setting" | "Search"

const BottomIcon = (props: IBottomIcon) => {
  // const routeMap: Record<RouteNames, ESCREENICON> = {
  //   Home: ESCREENICON.OUTLINE_PLAY,
  //   Setting: ESCREENICON.OUTLINE_SETTING,
  //   Search: ESCREENICON.SEARCH,
  // }

  // const selectedRouteMap: Record<RouteNames, ESCREENICON> = {
  //   Home: ESCREENICON.PLAY,
  //   Setting: ESCREENICON.SETTING,
  //   Search: ESCREENICON.SEARCH,
  // }

  // const routeName = (name: string): string => {
  //   const capName = capitalizeFirstLetter(name)
  //   const defaultIconName = ESCREENICON.PLAY
  //   const iconName = props.isFocused
  //     ? selectedRouteMap[capName as RouteNames]
  //     : routeMap[capName as RouteNames]
  //   return iconName || defaultIconName
  // }

  return (
    <Animated.View
      style={{ justifyContent: "center", alignItems: "center", alignContent: "center" }}
    >
      <Animated.View
        style={{
          paddingBottom: 8,
        }}
      >
        <Animated.View style={styles.container}>
          {/* <Ionicons
            name={props.routeName}
            size={30}
            color={props.isFocused ? color.selectedColor : color.mediumGray}
          /> */}
          <Text>{props.routeName}</Text>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 24,
    zIndex: 1,
  },
})

export default BottomIcon
