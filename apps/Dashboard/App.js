import { StyleSheet, Text, View } from 'react-native';
import DashboardTabs from './navigation/DashboardTabs';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      {/* <DashboardTabs /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
