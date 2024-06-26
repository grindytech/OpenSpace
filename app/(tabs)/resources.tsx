import { StyleSheet, View } from 'react-native';
import ResourceTable from '@/components/ResourceTable';
import ResourceDetail from '@/components/ResourceDetail';
import { Resource, StorageUpgrade } from '@/common/type';
import { useState } from 'react';


export default function ResourcesScreen() {
  const [resources, setResources] = useState<Resource[]>([
    {
      name: 'Bitcoin',
      amount: 0,
      description: 'Bitcoin is a basic resource used for upgrades.',
    },

    {
      name: 'Steel',
      amount: 0,
      description: 'Steel is a basic resource used for upgrades.',
    },
  ]);

  const [storageUpgradeCosts, setStorageUpgradeCosts] = useState<StorageUpgrade[]>([
    {
      name: 'Bitcoin',
      costs: [
        {
          name: 'Bitcoin',
          amount: 1,
          description: 'Bitcoin is a basic resource used for upgrades.',
        },
        {
          name: 'Steel',
          amount: 5,
          description: 'Steel is a basic resource used for upgrades.',
        },
      ]
    },
    {
      name: 'Steel',
      costs: [
        {
          name: 'Bitcoin',
          amount: 1,
          description: 'Bitcoin is a basic resource used for upgrades.',
        },
        {
          name: 'Steel',
          amount: 5,
          description: 'Steel is a basic resource used for upgrades.',
        },
      ]
    },
  ]);

  const getStorageUpgradeCost: StorageUpgrade = (resourceName: string) => {
    let cost = storageUpgradeCosts.find(resource => resource.name == resourceName);

    if (cost != undefined) {
      return cost;
    } else {
      return storageUpgradeCosts[0];
    }
  }

  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const mineResource = (resourceName: string) => {

    console.log("Mine: ", resourceName);

    setResources((prevResources) =>
      prevResources.map((resource) =>
        resource.name === resourceName
          ? { ...resource, amount: resource.amount + 1 }
          : resource
      )
    );

    if (selectedResource && selectedResource.name === resourceName) {
      setSelectedResource({
        ...selectedResource,
        amount: selectedResource.amount + 1
      });
    }
  };

  const handleSelectResource = (warehouse: Resource) => {
    setSelectedResource(warehouse);
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
            upgradeCosts={getStorageUpgradeCost(selectedResource.name)}
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
