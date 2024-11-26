import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTheme = async (theme) => {
  try {
    await AsyncStorage.setItem('theme', theme);
  } catch (error) {
    console.error('Erro ao salvar o tema:', error);
  }
};

export const getTheme = async () => {
  try {
    return await AsyncStorage.getItem('theme');
  } catch (error) {
    console.error('Erro ao obter o tema:', error);
  }
};
