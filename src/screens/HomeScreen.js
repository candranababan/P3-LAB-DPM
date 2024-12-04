import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { dummyDestinations } from '../utils/dummyData';
import DestinationCard from '../components/DestinationCard';

const HomeScreen = ({ navigation }) => {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setDestinations(dummyDestinations);
  }, []);

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Destinations..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DestinationCard
            destination={item}
            onPress={() => navigation.navigate('Detail', { destination: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
