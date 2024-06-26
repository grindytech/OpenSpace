import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SpaceshipPart from './SpaceshipPart';

interface SpaceshipProps {
  spaceship: {
    id: number;
    parts: {
      name: string;
      level: number;
      upgradeCost: {
        gems: number;
        metal: number;
      };
      description: string;
    }[];
  };
  onUpgradePart: (partName: string) => void;
}

const Spaceship: React.FC<SpaceshipProps> = ({ spaceship, onUpgradePart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spaceship {spaceship.id}</Text>
      <View style={styles.spaceship}>
        {/* Cockpit */}
        <View style={[styles.cockpit, { left: 100, top: 10 }]}>
          <SpaceshipPart part={findPartByName('Cockpit')} onUpgrade={() => onUpgradePart('Cockpit')} />
        </View>
        {/* Front Gun */}
        <View style={[styles.frontGun, { left: 100, top: 160 }]}>
          <SpaceshipPart part={findPartByName('Front Gun')} onUpgrade={() => onUpgradePart('Front Gun')} />
        </View>
        {/* Engines */}
        <View style={[styles.engines, { left: 50, top: 200 }]}>
          <SpaceshipPart part={findPartByName('Engines')} onUpgrade={() => onUpgradePart('Engines')} />
        </View>
        {/* Wings */}
        <View style={[styles.wings, { left: 150, top: 200 }]}>
          <SpaceshipPart part={findPartByName('Wings')} onUpgrade={() => onUpgradePart('Wings')} />
        </View>
      </View>
    </View>
  );
};

const findPartByName = (name: string) => {
  // Example logic to find part by name from spaceship parts
  // Replace with your actual logic
  return {
    name: name,
    level: 1,
    upgradeCost: { gems: 10, metal: 5 },
    description: 'Basic description for ' + name,
  };
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
  spaceship: {
    position: 'relative',
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#ccc',
  },
  cockpit: {
    position: 'absolute',
    width: 100,
    height: 50,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontGun: {
    position: 'absolute',
    width: 80,
    height: 40,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  engines: {
    position: 'absolute',
    width: 50,
    height: 100,
    backgroundColor: 'lightgreen',
  },
  wings: {
    position: 'absolute',
    width: 100,
    height: 20,
    backgroundColor: 'orange',
  },
});

export default Spaceship;
