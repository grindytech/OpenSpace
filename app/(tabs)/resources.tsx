import { StyleSheet, View } from 'react-native';
import ResourceTable from '@/components/ResourceTable';
import ResourceDetail from '@/components/ResourceDetail';
import { useState } from 'react';

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

export default function ResourcesScreen() {
  const [resources, setResources] = useState<Resource[]>([
    {
      name: 'Oil',
      amount: 0,
      description: 'Oil are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.',
      storageUpgradeCost: {
        gems: 409600,
        metal: 163840,
      },
      gemMiner: 0,
      advancedDrill: 0,
    },
    {
      name: 'Metal',
      amount: 0,
      description: 'Metal are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.',
      storageUpgradeCost: {
        gems: 409600,
        metal: 163840,
      },
      gemMiner: 0,
      advancedDrill: 0,
    },
    {
      name: 'Gems',
      amount: 0,
      description: 'Gems are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.',
      storageUpgradeCost: {
        gems: 409600,
        metal: 163840,
      },
      gemMiner: 0,
      advancedDrill: 0,
    },
    {
      name: 'Bitcoin',
      amount: 0,
      description: 'Bitcoin is a basic resource used for various constructions and upgrades.',
      storageUpgradeCost: {
        gems: 1000,
        metal: 500,
      },
      gemMiner: 0,
      advancedDrill: 0,
    },
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

  const upgradeStorage = (resourceName: string) => {
    // Implement storage upgrade logic here
  };

  const getMiner = (resourceName: string) => {
    // Implement get miner logic here
  };

  const destroyMiner = (resourceName: string) => {
    // Implement destroy miner logic here
  };

  const getDrill = (resourceName: string) => {
    // Implement get drill logic here
  };

  const destroyDrill = (resourceName: string) => {
    // Implement destroy drill logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <ResourceTable resources={resources} onSelectResource={handleSelectResource} />
      </View>
      {selectedResource && (
        <View style={styles.detailContainer}>
          <ResourceDetail
            resource={selectedResource}
            onMine={() => mineResource(selectedResource.name)}
            onUpgradeStorage={() => upgradeStorage(selectedResource.name)}
            onGetMiner={() => getMiner(selectedResource.name)}
            onDestroyMiner={() => destroyMiner(selectedResource.name)}
            onGetDrill={() => getDrill(selectedResource.name)}
            onDestroyDrill={() => destroyDrill(selectedResource.name)}
          />
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
