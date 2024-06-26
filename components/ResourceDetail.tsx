import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface ResourceDetailProps {
  resource: {
    name: string;
    amount: number;
  };
  onMine: () => void;
}

const ResourceDetail: React.FC<ResourceDetailProps> = ({ resource, onMine }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{resource.name}</Text>
      <Text style={styles.amount}>Amount: {resource.amount}</Text>
      <Button title={`Mine ${resource.name}`} onPress={onMine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amount: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ResourceDetail;
