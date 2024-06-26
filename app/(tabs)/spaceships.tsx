import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Spaceship from '@/components/Spaceship';

const initialParts = [
  {
    name: 'Power',
    level: 1,
    upgradeCost: { gems: 10, metal: 5 },
    description: 'Provides energy for the spaceship.',
  },
  {
    name: 'Engine',
    level: 1,
    upgradeCost: { gems: 15, metal: 10 },
    description: 'Propels the spaceship through space.',
  },
  {
    name: 'Front Gun Machine',
    level: 1,
    upgradeCost: { gems: 20, metal: 15 },
    description: 'Primary weapon system for attacking enemies.',
  },
  {
    name: 'Rockets',
    level: 1,
    upgradeCost: { gems: 25, metal: 20 },
    description: 'Secondary weapon system for powerful attacks.',
  },
  {
    name: 'Navigator',
    level: 1,
    upgradeCost: { gems: 30, metal: 25 },
    description: 'Guides the spaceship through space routes.',
  },
  {
    name: 'Armor',
    level: 1,
    upgradeCost: { gems: 35, metal: 30 },
    description: 'Provides protection from enemy attacks.',
  },
];

const MySpaceshipsScreen = () => {
  const [spaceships, setSpaceships] = useState([
    { id: 1, parts: initialParts },
  ]);

  const upgradePart = (partName: string) => {
    setSpaceships((prevSpaceships) =>
      prevSpaceships.map((spaceship) => ({
        ...spaceship,
        parts: spaceship.parts.map((part) =>
          part.name === partName ? { ...part, level: part.level + 1 } : part
        ),
      }))
    );
  };

  return (
    <ScrollView style={styles.container}>
      {spaceships.map((spaceship) => (
        <Spaceship key={spaceship.id} spaceship={spaceship} onUpgradePart={upgradePart} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f6f4',
  },
});

export default MySpaceshipsScreen;
