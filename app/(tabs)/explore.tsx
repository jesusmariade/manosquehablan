import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Explorar</Text>
      <Text style={styles.paragraph}>
        Esta pantalla fue simplificada para evitar errores de módulos faltantes.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});
