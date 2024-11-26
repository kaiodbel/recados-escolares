import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RecadoItem from '../components/RecadoItem';
import { getRecados } from '../utils/RealmUtils';

const HomeScreen = () => {
  const [recados, setRecados] = useState([]);

  useEffect(() => {
    const loadRecados = () => {
      const data = getRecados();
      setRecados(data);
    };
    loadRecados();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={recados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RecadoItem title={item.title} content={item.content} viewed={item.viewed} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default HomeScreen;
