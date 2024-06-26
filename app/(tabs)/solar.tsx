import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const SolarSystemScreen = () => {
  // Placeholder data for planets in the Solar System
  const solarSystemData = [
    { id: '1', name: 'Mercury', description: 'Closest planet to the Sun.' },
    { id: '2', name: 'Venus', description: 'Second planet from the Sun.' },
    { id: '3', name: 'Earth', description: 'Third planet from the Sun, our home planet.' },
    { id: '4', name: 'Mars', description: 'Fourth planet from the Sun.' },
    { id: '5', name: 'Jupiter', description: 'Fifth planet from the Sun, largest in the Solar System.' },
    { id: '6', name: 'Saturn', description: 'Sixth planet from the Sun, known for its rings.' },
    { id: '7', name: 'Uranus', description: 'Seventh planet from the Sun, rotates on its side.' },
    { id: '8', name: 'Neptune', description: 'Eighth planet from the Sun, known for its blue color.' },
  ];

  // Render item for FlatList
  const renderItem = ({ item }: { item: { id: string; name: string; description: string } }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <Text style={styles.subtitle}>Explore the Solar System</Text>
      <Text style={styles.description}>
        Discover planets, moons, and fascinating facts about our Solar System.
      </Text>
      <FlatList
        data={solarSystemData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    width: '100%',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  itemDescription: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SolarSystemScreen;
