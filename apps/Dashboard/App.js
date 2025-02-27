import { StyleSheet, Text, View } from 'react-native';
import DashboardTabs from './navigation/DashboardTabs';

export default function App() {
  return (
    <View>
      <Text>Dashboard</Text>
      {/* <DashboardTabs /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
});
