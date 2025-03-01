import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useScroll } from '../../ScrollContext';

const data = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
  },

  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
  },
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
  },
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
  },
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
  },
]

export default function App() {
  const { scrollY,setScrollY } = useScroll(); 

const onScroll = (data) => {
  console.log(data.nativeEvent.contentOffset.y);
  setScrollY(data.nativeEvent.contentOffset.y);
}
  return (
    <ScrollView style={styles.container} onScroll={onScroll}>
      <Text>Settings</Text>
      <StatusBar style="auto" />

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{marginVertical: 60}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
