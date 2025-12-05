import { Image } from 'expo-image';
import { router, Stack } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { culturalInfo } from '@/data/culture';
import { CulturalInfo } from '@/types';

const categoryColors: Record<string, string> = {
  religion: '#8B0000',
  festival: '#D4692B',
  tradition: '#8B6B47',
  art: '#5D4037'
};

export default function CultureScreen() {
  const renderCultureCard = (item: CulturalInfo) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.cultureCard}
        activeOpacity={0.9}
      >
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.cultureImage}
          contentFit="cover"
        />
        <View style={styles.cultureContent}>
          <View style={[styles.categoryBadge, { backgroundColor: categoryColors[item.category] }]}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <Text style={styles.cultureTitle}>{item.title}</Text>
          <Text style={styles.cultureTitleSi}>{item.titleSi}</Text>
          <Text style={styles.cultureDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <ArrowLeft size={24} color="#1A1A1A" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Culture & Religion</Text>
            <Text style={styles.headerSubtitle}>සංස්කෘතිය සහ ආගම</Text>
          </View>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.intro}>
            <Text style={styles.introText}>
              Discover the spiritual depth, vibrant festivals, and timeless traditions 
              that shape the soul of Sri Lanka.
            </Text>
          </View>

          <View style={styles.culturesContainer}>
            {culturalInfo.map(renderCultureCard)}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF5'
  },
  safeArea: {
    flex: 1
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#FAFAF5'
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  headerContent: {
    flex: 1
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    letterSpacing: -0.5
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#8B6B47',
    marginTop: 2,
    fontWeight: '500' as const
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40
  },
  intro: {
    marginBottom: 24
  },
  introText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22
  },
  culturesContainer: {
    gap: 20
  },
  cultureCard: {
    borderRadius: 20,
    backgroundColor: '#FFF',
    overflow: 'hidden' as const,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6
  },
  cultureImage: {
    width: '100%',
    height: 220
  },
  cultureContent: {
    padding: 20
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 12
  },
  categoryText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600' as const,
    textTransform: 'uppercase' as const,
    letterSpacing: 0.5
  },
  cultureTitle: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    letterSpacing: -0.3,
    marginBottom: 6
  },
  cultureTitleSi: {
    fontSize: 15,
    color: '#8B6B47',
    fontWeight: '500' as const,
    marginBottom: 12
  },
  cultureDescription: {
    fontSize: 15,
    color: '#444',
    lineHeight: 24
  }
});
