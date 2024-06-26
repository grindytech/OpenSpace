import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ResourceItemProps {
  name: string;
  amount: number;
  onPress: () => void;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ name, amount, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 18,
    color: '#333',
  },
  amount: {
    fontSize: 18,
    color: '#333',
  },
});

export default ResourceItem;
