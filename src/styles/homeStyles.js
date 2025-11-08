import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heroSection: {
        padding: 20,
        backgroundColor: '#4A90E2',
        alignItems: 'center',
        paddingVertical: 40,
    },
    heroTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    heroSubtitle: {
        fontSize: 18,
        color: '#fff',
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    sectionText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    featureList: {
        marginTop: 10,
    },
    featureItem: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 8,
        color: '#333',
    },
    actionsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 16,
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    actionButtonSecondary: {
        flex: 1,
        backgroundColor: '#e5e7eb',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    actionButtonTextSecondary: {
        color: '#111827',
        fontSize: 16,
        fontWeight: '600',
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 8,
    },
    card: {
        width: '48%',
        backgroundColor: '#f9fafb',
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 6,
        color: '#111827',
    },
    cardText: {
        fontSize: 13,
        color: '#4b5563',
        lineHeight: 18,
    },
});
