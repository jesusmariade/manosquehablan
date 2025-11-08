import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { cardStyles as styles } from '../styles/cardStyles';
// estos seran los componentes reutilizables de las lecciones 
export function LessonCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress?.(item)}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.level}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.metaRow}>
        <Text style={styles.meta}>{item.duration} min</Text>
        <Text style={styles.meta}>{item.topics?.length || 0} temas</Text>
      </View>
    </TouchableOpacity>
  );
}
