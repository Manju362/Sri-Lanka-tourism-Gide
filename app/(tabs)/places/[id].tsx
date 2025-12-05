import { Image } from 'expo-image';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, MapPin, Clock } from 'lucide-react-native';
import React from 'react';
import { Animated, Dimensions, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { historicalPlaces } from '@/data/places';

const { width, height } = Dimensions.get('window');
const IMAGE_HEIGHT = height * 0.5;

export default function PlaceDetailScreen() {
  const { id } = useLocalSearchParams();
  const place = historicalPlaces.find(p => p.id === id);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  if (!place) {
    return (
      <View style={styles.container}>
        <Text>Place not found</Text>
      </View>
    );
  }

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  const imageScale = scrollY.interpolate({
    inputRange: [-100, 0],
    outputRange: [1.5, 1],
    extrapolate: 'clamp'
  });

  const openMaps = () => {
    const scheme = Platform.select({
      ios: 'maps:',
      android: 'geo:',
      default: 'https://maps.google.com'
    });
    const url = Platform.select({
      ios: `${scheme}?q=${place.coordinates.latitude},${place.coordinates.longitude}`,
      android: `${scheme}${place.coordinates.latitude},${place.coordinates.longitude}`,
      default: `https://www.google.com/maps/search/?api=1&query=${place.coordinates.latitude},${place.coordinates.longitude}`
    });

    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <Animated.View 
          style={[
            styles.imageContainer,
            {
              opacity: imageOpacity,
              transform: [{ scale: imageScale }]
            }
          ]}
        >
          <Image
            source={{ uri: place.imageUrl }}
            style={styles.image}
            contentFit="cover"
          />
          <View style={styles.imageOverlay} />
        </Animated.View>

        <View style={styles.content}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>{place.name}</Text>
            <Text style={styles.titleSi}>{place.nameSi}</Text>
            
            <TouchableOpacity style={styles.locationButton} onPress={openMaps}>
              <MapPin size={18} color="#D4692B" />
              <Text style={styles.locationText}>{place.location}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.bodyText}>{place.description}</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Clock size={22} color="#8B6B47" />
              <Text style={styles.sectionTitle}>History</Text>
            </View>
            <Text style={styles.bodyText}>{place.history}</Text>
          </View>

          {place.legends && place.legends.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Legends & Stories</Text>
              {place.legends.map((legend, index) => (
                <View key={index} style={styles.legendItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.legendText}>{legend}</Text>
                </View>
              ))}
            </View>
          )}

          <TouchableOpacity style={styles.mapsButton} onPress={openMaps}>
            <MapPin size={20} color="#FFF" />
            <Text style={styles.mapsButtonText}>Open in Maps</Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>

      <SafeAreaView edges={['top']} style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF5'
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    paddingBottom: 40
  },
  imageContainer: {
    width: width,
    height: IMAGE_HEIGHT,
    position: 'relative' as const
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  headerContainer: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 16
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5
  },
  content: {
    backgroundColor: '#FAFAF5',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    paddingHorizontal: 24,
    paddingTop: 28
  },
  titleSection: {
    marginBottom: 24
  },
  title: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    letterSpacing: -0.5,
    lineHeight: 38
  },
  titleSi: {
    fontSize: 20,
    color: '#8B6B47',
    fontWeight: '600' as const,
    marginTop: 8
  },
  locationButton: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    alignSelf: 'flex-start'
  },
  locationText: {
    fontSize: 15,
    color: '#D4692B',
    fontWeight: '500' as const
  },
  section: {
    marginBottom: 28
  },
  sectionHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 8,
    marginBottom: 12
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    marginBottom: 12,
    letterSpacing: -0.3
  },
  bodyText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 26,
    letterSpacing: 0.2
  },
  legendItem: {
    flexDirection: 'row' as const,
    marginBottom: 16,
    paddingLeft: 4
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D4692B',
    marginTop: 10,
    marginRight: 12
  },
  legendText: {
    flex: 1,
    fontSize: 15,
    color: '#444',
    lineHeight: 24
  },
  mapsButton: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#D4692B',
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 12,
    shadowColor: '#D4692B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6
  },
  mapsButtonText: {
    fontSize: 17,
    fontWeight: '600' as const,
    color: '#FFF',
    letterSpacing: 0.3
  }
});
