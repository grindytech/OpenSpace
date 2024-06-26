import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Spaceship {
  id: number;
  name: string;
  parts: {
    name: string;
    level: number;
  }[];
}

const BattleScreen = () => {
  const [playerSpaceships, setPlayerSpaceships] = useState<Spaceship[]>([
    {
      id: 1,
      name: 'Player Spaceship 1',
      parts: [
        { name: 'Engine', level: 3 },
        { name: 'Front Gun Machine', level: 2 },
        { name: 'Rockets', level: 1 },
        { name: 'Navigator', level: 2 },
        { name: 'Armor', level: 3 },
      ],
    },
    // Add more player spaceships as needed
  ]);

  const [opponentSpaceships, setOpponentSpaceships] = useState<Spaceship[]>([
    {
      id: 2,
      name: 'Opponent Spaceship 1',
      parts: [
        { name: 'Engine', level: 2 },
        { name: 'Front Gun Machine', level: 1 },
        { name: 'Rockets', level: 2 },
        { name: 'Navigator', level: 1 },
        { name: 'Armor', level: 2 },
      ],
    },
    // Add more opponent spaceships as needed
  ]);

  const handleBattleStart = () => {
    // Placeholder logic for battle simulation
    const playerPower = calculateSpaceshipPower(playerSpaceships);
    const opponentPower = calculateSpaceshipPower(opponentSpaceships);

      // Player wins, display victory message and reward details
      alert('Comming soon!');
  };

  const calculateSpaceshipPower = (spaceships: Spaceship[]) => {
    // Placeholder calculation of total power based on spaceship parts levels
    return spaceships.reduce((totalPower, spaceship) => {
      return totalPower + spaceship.parts.reduce((shipPower, part) => shipPower + part.level, 0);
    }, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PvP Battle - Coming Soon</Text>

      {/* Player Spaceships */}
      <View style={styles.spaceshipList}>
        <Text style={styles.listTitle}>Your Spaceships:</Text>
        {playerSpaceships.map((spaceship) => (
          <TouchableOpacity
            key={spaceship.id}
            style={styles.spaceshipItem}
            onPress={() => alert(`Selected ${spaceship.name}`)} // Placeholder for selection action
          >
            <Text style={styles.spaceshipName}>{spaceship.name}</Text>
            {/* Display selected parts or summary */}
            <Text style={styles.spaceshipParts}>
              Parts: {spaceship.parts.map(part => `${part.name} Lv.${part.level}`).join(', ')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Battle Simulation Button */}
      <TouchableOpacity style={styles.battleButton} onPress={handleBattleStart}>
        <Text style={styles.buttonText}>Start Battle</Text>
      </TouchableOpacity>

      {/* Opponent Spaceships (if visible or selectable) */}
      {/* For demonstration purposes, assume opponent's spaceships are pre-defined */}

      {/* Placeholder for battle simulation area */}

      {/* Placeholder for rewards and outcome display */}
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  spaceshipList: {
    marginBottom: 20,
    width: '100%',
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  spaceshipItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  spaceshipName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  spaceshipParts: {
    fontSize: 14,
    color: '#fff',
  },
  battleButton: {
    backgroundColor: '#61dafb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BattleScreen;
