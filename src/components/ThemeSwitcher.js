import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { saveTheme, getTheme } from '../utils/AsyncStorageUtils';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      const theme = await getTheme();
      setIsDarkMode(theme === 'dark');
    };
    loadTheme();
  }, []);

  const toggleSwitch = async () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    await saveTheme(newTheme);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Modo Escuro</Text>
      <Switch value={isDarkMode} onValueChange={toggleSwitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  label: {
    fontSize: 16,
  },
});

export default ThemeSwitcher;
