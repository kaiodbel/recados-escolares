import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { addRecado } from '../utils/RealmUtils';

const AddRecadoScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    addRecado({ id: Date.now(), title, content, viewed: false });
    setTitle('');
    setContent('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Conteúdo"
        value={content}
        onChangeText={setContent}
      />
      <Button title="Salvar Recado" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default AddRecadoScreen;
