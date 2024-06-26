import React from 'react';
import { View, StyleSheet } from 'react-native';
import ResourceItem from './ResourceItem';

interface Resource {
  name: string;
  amount: number;
  description: string;
  storageUpgradeCost: {
    gems: number;
    metal: number;
  };
  gemMiner: number;
  advancedDrill: number;
}

interface ResourceTableProps {
  resources: Resource[];
  onSelectResource: (resource: Resource) => void;
}

const ResourceTable: React.FC<ResourceTableProps> = ({ resources, onSelectResource }) => {
  return (
    <View style={styles.container}>
      {resources.map((resource) => (
        <ResourceItem
          key={resource.name}
          name={resource.name}
          amount={resource.amount}
          onPress={() => onSelectResource(resource)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default ResourceTable;
