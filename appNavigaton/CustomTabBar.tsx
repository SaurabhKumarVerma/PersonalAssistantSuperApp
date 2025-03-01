/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View, Pressable } from "react-native"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import BottomIcon from "./BottomIcon"
import { BlurView } from "@react-native-community/blur"
const CustomBottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const MARGIN = 30
    return (
        <BlurView blurType={'dark'}
            blurAmount={60}
            downsampleFactor={10}
            style={[styles.container, {  bottom: MARGIN }]}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params)
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    })
                }
                return (
                    <Pressable
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                        }}
                    >
                        <View style={[styles.content, { borderRadius: 24 }]}>
                            <BottomIcon isFocused={isFocused} routeName={route.name} index={state.index} />
                        </View>
                    </Pressable>
                )
            })}
        </BlurView>
        // </Shadow>
    )
}

export default CustomBottomTabBar
const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: 'white',
        borderTopWidth: 0.2,
        flexDirection: "row",
        flex: 1,
        height: 70,
        justifyContent: "space-between",
        overflow: "hidden",
        position: "absolute",
        left: 10,
        right: 10,
        bottom: 10,
        borderRadius: 30
        // top: 10
    },
    content: {
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
})
