import { StyleSheet, Text, View } from 'react-native';
import ResourceTable from '@/components/ResourceTable';
import ResourceDetail from '@/components/ResourceDetail';
import { useState } from 'react';

interface Resource {
  name: string;
  amount: number;
}

export default function ResourcesScreen() {
  const [resources, setResources] = useState<Resource[]>([
    { name: 'Space Ore', amount: 0 },
    { name: 'Crystal', amount: 0 },
  ]);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const mineResource = (resourceName: string) => {
    setResources((prevResources) =>
      prevResources.map((resource) =>
        resource.name === resourceName
          ? { ...resource, amount: resource.amount + 1 }
          : resource
      )
    );
    if (selectedResource && selectedResource.name === resourceName) {
      setSelectedResource({ ...selectedResource, amount: selectedResource.amount + 1 });
    }
  };

  const handleSelectResource = (resource: Resource) => {
    setSelectedResource(resource);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <ResourceTable resources={resources} onSelectResource={handleSelectResource} />
      </View>
      {selectedResource && (
        <View style={styles.detailContainer}>
          <ResourceDetail resource={selectedResource} onMine={() => mineResource(selectedResource.name)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f6f4',
    padding: 20,
  },
  tableContainer: {
    flex: 1,
  },
  detailContainer: {
    flex: 1,
    marginLeft: 20,
  },
});
