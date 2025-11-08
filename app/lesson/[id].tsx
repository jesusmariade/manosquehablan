import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { lessons } from '../../src/data/lessons';

export default function LessonDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const lesson = lessons.find((l) => String(l.id) === String(id));

  if (!lesson) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Lección no encontrada</Text>
        <Text onPress={() => router.replace('/lesson/index')} style={{ color: '#1e90ff' }}>
          Volver a Lecciones
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '800', marginBottom: 6 }}>{lesson.title}</Text>
      <Text style={{ color: '#4b5563', marginBottom: 14 }}>{lesson.description}</Text>
      <Text style={{ fontWeight: '700', marginBottom: 8 }}>Temas</Text>
      {lesson.topics?.map((t) => (
        <View key={t.id} style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 10, padding: 12, marginBottom: 10 }}>
          <Text style={{ fontWeight: '700', marginBottom: 6 }}>{t.title}</Text>
          <Text style={{ color: '#6b7280' }}>Pasos: {t.steps?.length || 0}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
