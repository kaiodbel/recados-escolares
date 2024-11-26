import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeSwitcher from '../components/ThemeSwitcher';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <ThemeSwitcher />
      <Text style={styles.info}>
        Este aplicativo permite enviar e receber recados escolares de forma eficiente.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  info: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default SettingsScreen;
