import { Image } from 'expo-image';
import { router } from 'expo-router';
import { MapPin, Utensils, Sparkles } from 'lucide-react-native';
import React from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 48;

interface CategoryCard {
  id: string;
  title: string;
  titleSi: string;
  description: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  imageUrl: string;
  route: string;
  color: string;
}

const categories: CategoryCard[] = [
  {
    id: '1',
    title: 'Historical Places',
    titleSi: 'ඓතිහාසික ස්ථාන',
    description: 'Explore ancient fortresses, sacred temples, and UNESCO heritage sites',
    icon: MapPin,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    route: '/places',
    color: '#D4692B'
  },
  {
    id: '2',
    title: 'Cuisine',
    titleSi: 'ආහාර',
    description: 'Discover the rich flavors and spices of Sri Lankan food',
    icon: Utensils,
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    route: '/cuisine',
    color: '#8B4513'
  },
  {
    id: '3',
    title: 'Culture & Religion',
    titleSi: 'සංස්කෘතිය සහ ආගම',
    description: 'Learn about festivals, traditions, and spiritual heritage',
    icon: Sparkles,
    imageUrl: 'https://images.unsplash.com/photo-1552128568-3e1f50a6ac1b?w=800',
    route: '/culture',
    color: '#8B0000'
  }
];

export default function HomeScreen() {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -50],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <Animated.View 
          style={[
            styles.header, 
            { 
              opacity: headerOpacity,
              transform: [{ translateY: headerTranslate }]
            }
          ]}
        >
          <Text style={styles.headerTitle}>Discover Sri Lanka</Text>
          <Text style={styles.headerSubtitle}>ශ්‍රී ලංකාව සොයන්න</Text>
          <Text style={styles.headerDescription}>
            Explore the Pearl of the Indian Ocean
          </Text>
        </Animated.View>

        <Animated.ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          <View style={styles.heroSection}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200' }}
              style={styles.heroImage}
              contentFit="cover"
            />
            <View style={styles.heroOverlay}>
              <Text style={styles.heroTitle}>Welcome to</Text>
              <Text style={styles.heroTitleLarge}>Sri Lanka</Text>
              <Text style={styles.heroSubtitle}>Pearl of the Indian Ocean</Text>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Explore Categories</Text>
            <Text style={styles.sectionSubtitle}>
              Immerse yourself in the rich heritage and beauty
            </Text>

            <View style={styles.categoriesContainer}>
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <TouchableOpacity
                    key={category.id}
                    style={styles.categoryCard}
                    activeOpacity={0.9}
                    onPress={() => router.push(category.route as any)}
                  >
                    <Image
                      source={{ uri: category.imageUrl }}
                      style={styles.categoryImage}
                      contentFit="cover"
                    />
                    <View style={styles.categoryOverlay} />
                    <View style={styles.categoryContent}>
                      <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
                        <Icon size={28} color="#FFFFFF" />
                      </View>
                      <Text style={styles.categoryTitle}>{category.title}</Text>
                      <Text style={styles.categoryTitleSi}>{category.titleSi}</Text>
                      <Text style={styles.categoryDescription}>{category.description}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>About Sri Lanka</Text>
              <Text style={styles.infoText}>
                Sri Lanka, known as the &ldquo;Pearl of the Indian Ocean,&rdquo; is an island nation 
                with over 2,500 years of recorded history. From ancient kingdoms and sacred 
                Buddhist sites to pristine beaches and diverse wildlife, Sri Lanka offers 
                a unique blend of natural beauty, cultural richness, and warm hospitality.
              </Text>
              <Text style={styles.infoText}>
                Home to 8 UNESCO World Heritage Sites, this tropical paradise has been a 
                crossroads of cultures, religions, and civilizations for millennia. 
                Experience the magic of this extraordinary destination.
              </Text>
            </View>
          </View>
        </Animated.ScrollView>
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
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: '#FAFAF5'
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    letterSpacing: -0.5
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#8B6B47',
    marginTop: 4,
    fontWeight: '500' as const
  },
  headerDescription: {
    fontSize: 15,
    color: '#666',
    marginTop: 8,
    lineHeight: 22
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    paddingBottom: 40
  },
  heroSection: {
    height: 280,
    position: 'relative' as const
  },
  heroImage: {
    width: '100%',
    height: '100%'
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  heroTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '400' as const,
    letterSpacing: 2
  },
  heroTitleLarge: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: '800' as const,
    letterSpacing: -1,
    marginTop: 4
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '300' as const,
    marginTop: 8,
    letterSpacing: 1
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    letterSpacing: -0.5
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#666',
    marginTop: 8,
    lineHeight: 22
  },
  categoriesContainer: {
    marginTop: 24,
    gap: 20
  },
  categoryCard: {
    width: CARD_WIDTH,
    height: 280,
    borderRadius: 20,
    overflow: 'hidden' as const,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute' as const
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)'
  },
  categoryContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-end'
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  categoryTitle: {
    fontSize: 26,
    fontWeight: '700' as const,
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: -0.5
  },
  categoryTitleSi: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500' as const,
    marginBottom: 8,
    opacity: 0.95
  },
  categoryDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
    opacity: 0.9
  },
  infoSection: {
    marginTop: 40,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    marginBottom: 16,
    letterSpacing: -0.3
  },
  infoText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 24,
    marginBottom: 12
  }
});
