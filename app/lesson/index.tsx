import React from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { lessons } from '../../src/data/lessons';
import { LessonCard } from '../../src/components/LessonCard';

export default function LessonsScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View>
        {lessons.map((item) => (
          <LessonCard
            key={item.id}
            item={item}
            onPress={() => router.push(`/lesson/${item.id}` as any)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
