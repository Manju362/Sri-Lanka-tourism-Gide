import { Image } from 'expo-image';
import { router, Stack } from 'expo-router';
import { ArrowLeft, MapPin } from 'lucide-react-native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { historicalPlaces } from '@/data/places';
import { HistoricalPlace } from '@/types';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 60) / 2;

const categoryColors: Record<string, string> = {
  temple: '#8B0000',
  fortress: '#D4692B',
  'ancient-city': '#8B4513',
  natural: '#2E7D32',
  cultural: '#5D4037'
};

export default function PlacesScreen() {
  const renderPlaceCard = (place: HistoricalPlace) => {
    return (
      <TouchableOpacity
        key={place.id}
        style={styles.placeCard}
        activeOpacity={0.9}
        onPress={() => router.push(`/places/${place.id}` as any)}
      >
        <Image
          source={{ uri: place.imageUrl }}
          style={styles.placeImage}
          contentFit="cover"
        />
        <View style={styles.placeOverlay} />
        <View style={styles.placeContent}>
          <View style={[styles.categoryBadge, { backgroundColor: categoryColors[place.category] }]}>
            <Text style={styles.categoryText}>{place.category.replace('-', ' ')}</Text>
          </View>
          <Text style={styles.placeName}>{place.name}</Text>
          <Text style={styles.placeNameSi}>{place.nameSi}</Text>
          <View style={styles.locationRow}>
            <MapPin size={14} color="#FFFFFF" />
            <Text style={styles.locationText}>{place.location.split(',')[0]}</Text>
          </View>
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
            <Text style={styles.headerTitle}>Historical Places</Text>
            <Text style={styles.headerSubtitle}>ඓතිහාසික ස්ථාන</Text>
          </View>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.intro}>
            <Text style={styles.introText}>
              Explore Sri Lanka&rsquo;s magnificent heritage sites, from ancient fortresses 
              to sacred temples that have stood for millennia.
            </Text>
          </View>

          <View style={styles.grid}>
            {historicalPlaces.map(renderPlaceCard)}
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
  grid: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    gap: 16,
    justifyContent: 'space-between'
  },
  placeCard: {
    width: CARD_WIDTH,
    height: 260,
    borderRadius: 16,
    overflow: 'hidden' as const,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6
  },
  placeImage: {
    width: '100%',
    height: '100%',
    position: 'absolute' as const
  },
  placeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)'
  },
  placeContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end'
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 12
  },
  categoryText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600' as const,
    textTransform: 'uppercase' as const,
    letterSpacing: 0.5
  },
  placeName: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: -0.3
  },
  placeNameSi: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '500' as const,
    marginBottom: 8,
    opacity: 0.95
  },
  locationRow: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 4
  },
  locationText: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.9
  }
});
