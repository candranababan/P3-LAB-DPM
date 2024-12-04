import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DestinationCard = ({ destination, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.name}>{destination.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
});

export default DestinationCard;
