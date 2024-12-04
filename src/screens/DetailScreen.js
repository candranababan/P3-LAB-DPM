import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { destination } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{destination.name}</Text>
      <Text style={styles.description}>{destination.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 16, color: '#555' },
});

export default DetailScreen;
