import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/homeStyles';

const HomeScreen = () => {
    const router = useRouter();
    return (
    <ScrollView style={styles.container}>
        <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Manos Que Hablan</Text>
        <Text style={styles.heroSubtitle}>Aprende lenguaje de señas</Text>
        </View>
        <View style={styles.section}>
        <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/lesson')}>
            <Text style={styles.actionButtonText}>Empezar lección</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButtonSecondary} onPress={() => router.push('/lesson')}>
            <Text style={styles.actionButtonTextSecondary}>Explorar</Text>
            </TouchableOpacity>
        </View>
        </View>
        
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bienvenido</Text>
        <Text style={styles.sectionText}>
            Descubre una nueva forma de comunicarte y aprende lenguaje de señas
            de manera interactiva.
        </Text>
        </View>

        <View style={styles.section}>
        <Text style={styles.sectionTitle}>Características</Text>
        <View style={styles.cardsContainer}>
            <View style={styles.card}>
            <Text style={styles.cardTitle}>Lecciones</Text>
            <Text style={styles.cardText}>Aprende paso a paso con ejemplos.</Text>
            </View>
            <View style={styles.card}>
            <Text style={styles.cardTitle}>Práctica</Text>
            <Text style={styles.cardText}>Ejercicios para reforzar tu aprendizaje.</Text>
            </View>
            <View style={styles.card}>
            <Text style={styles.cardTitle}>Comunidad</Text>
            <Text style={styles.cardText}>Comparte y aprende con otros.</Text>
            </View>
            <View style={styles.card}>
            <Text style={styles.cardTitle}>Progreso</Text>
            <Text style={styles.cardText}>Sigue tu avance y metas.</Text>
            </View>
        </View>
        </View>
    </ScrollView>
    );
};

export default HomeScreen;
