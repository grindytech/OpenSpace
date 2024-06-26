import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Resource, StorageUpgrade} from '@/common/type';

interface ResourceDetailProps {
  resource: Resource;
  upgradeCosts: StorageUpgrade,
  onMine: () => void;
  onUpgradeStorage: () => void;
  onGetMiner: () => void;
  onDestroyMiner: () => void;
  onGetDrill: () => void;
  onDestroyDrill: () => void;
}

const ResourceDetail: React.FC<ResourceDetailProps> = ({
  resource,
  upgradeCosts,
  onMine,
  onUpgradeStorage,
  onGetMiner,
  onDestroyMiner,
  onGetDrill,
  onDestroyDrill
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{resource.name}</Text>
      <Text style={styles.amount}>Amount: {resource.amount}</Text>
      <Text style={styles.description}>{resource.description}</Text>
      <Button title={`Gain 1 ${resource.name}`} onPress={onMine} />

      <View style={styles.upgradeContainer}>
        <Text style={styles.upgradeTitle}>Storage Upgrade</Text>
        <Text>Upgrade your {resource.name} storage size to 819,200.</Text>
        <Text>Time remaining until full storage: N/A</Text>
        <Text>
          Costs{' '}
          {upgradeCosts.costs.map((cost, index) => (
            <Text key={index}>
              {index > 0 && index === upgradeCosts.costs.length - 1 ? ' and ' : index > 0 ? ', ' : ''}
              {`${cost.amount} ${cost.name}`}
            </Text>
          ))}
          .
        </Text>
        <Button title="Upgrade Storage" onPress={onUpgradeStorage} />
      </View>

      <View style={styles.minerContainer}>
        <Text>Build an improved pickaxe to mine Gems.</Text>
        <Text>Produces 1 gem per second.</Text>
        <Text>Costs 15 Metal, 10 Gems.</Text>
        <Button title="Get Miner" onPress={onGetMiner} />
        <Button title="Destroy Miner" onPress={onDestroyMiner} />
      </View>

      <View style={styles.drillContainer}>
        <Text>Advanced Drills mine gem at mass. Because of the toughness of the drill needed it is slower than the heavy drill.</Text>
        <Text>Produces 4 Gems per second.</Text>
        <Text>Uses 2 Energy per second.</Text>
        <Text>Costs 120 Metal, 200 Gems, 60 Oil.</Text>
        <Button title="Get Drill" onPress={onGetDrill} />
        <Button title="Destroy Drill" onPress={onDestroyDrill} />
      </View>
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
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  upgradeContainer: {
    marginTop: 20,
  },
  upgradeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  minerContainer: {
    marginTop: 20,
  },
  minerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drillContainer: {
    marginTop: 20,
  },
  drillTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResourceDetail;
