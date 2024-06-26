import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface SpaceshipPartProps {
  part: {
    name: string;
    level: number;
    upgradeCost: {
      gems: number;
      metal: number;
    };
    description: string;
  };
  onUpgrade: () => void;
}

const SpaceshipPart: React.FC<SpaceshipPartProps> = ({ part, onUpgrade }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Button title={part.name} onPress={toggleDetails} />
      {showDetails && (
        <View style={styles.details}>
          <Text>Description: {part.description}</Text>
          <Text>Level: {part.level}</Text>
          <Text>Upgrade Cost: {part.upgradeCost.gems} Gems, {part.upgradeCost.metal} Metal</Text>
          <Button title="Upgrade" onPress={onUpgrade} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  details: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

export default SpaceshipPart;
