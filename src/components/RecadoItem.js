import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecadoItem = ({ title, content, viewed }) => {
  return (
    <View style={[styles.container, viewed && styles.viewed]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  viewed: {
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    marginTop: 5,
    color: '#555',
  },
});

export default RecadoItem;
