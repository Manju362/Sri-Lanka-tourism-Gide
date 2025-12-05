import { Image } from 'expo-image';
import { router, Stack } from 'expo-router';
import { ArrowLeft, Flame } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { sriLankanFoods } from '@/data/foods';
import { SriLankanFood } from '@/types';

const spiceColors: Record<string, string> = {
  mild: '#4CAF50',
  medium: '#FF9800',
  spicy: '#F44336'
};

export default function CuisineScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'main', label: 'Main Dishes' },
    { id: 'snack', label: 'Snacks' },
    { id: 'dessert', label: 'Desserts' },
    { id: 'beverage', label: 'Beverages' }
  ];

  const filteredFoods = selectedCategory === 'all' 
    ? sriLankanFoods 
    : sriLankanFoods.filter(food => food.category === selectedCategory);

  const renderFoodCard = (food: SriLankanFood) => {
    return (
      <TouchableOpacity
        key={food.id}
        style={styles.foodCard}
        activeOpacity={0.9}
      >
        <Image
          source={{ uri: food.imageUrl }}
          style={styles.foodImage}
          contentFit="cover"
        />
        <View style={styles.foodContent}>
          <View style={styles.foodHeader}>
            <View style={styles.foodTitles}>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodNameSi}>{food.nameSi}</Text>
            </View>
            {food.spiceLevel && (
              <View style={[styles.spiceBadge, { backgroundColor: spiceColors[food.spiceLevel] }]}>
                <Flame size={14} color="#FFF" />
                <Text style={styles.spiceText}>{food.spiceLevel}</Text>
              </View>
            )}
          </View>
          <Text style={styles.foodDescription}>{food.description}</Text>
          
          {food.ingredients && food.ingredients.length > 0 && (
            <View style={styles.ingredientsSection}>
              <Text style={styles.ingredientsTitle}>Key Ingredients:</Text>
              <View style={styles.ingredientsContainer}>
                {food.ingredients.slice(0, 4).map((ingredient, index) => (
                  <View key={index} style={styles.ingredientBadge}>
                    <Text style={styles.ingredientText}>{ingredient}</Text>
                  </View>
                ))}
                {food.ingredients.length > 4 && (
                  <View style={styles.ingredientBadge}>
                    <Text style={styles.ingredientText}>+{food.ingredients.length - 4}</Text>
                  </View>
                )}
              </View>
            </View>
          )}
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
            <Text style={styles.headerTitle}>Sri Lankan Cuisine</Text>
            <Text style={styles.headerSubtitle}>ශ්‍රී ලංකා ආහාර</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
          style={styles.categoriesContainer}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.categoryButton,
                selectedCategory === cat.id && styles.categoryButtonActive
              ]}
              onPress={() => setSelectedCategory(cat.id)}
            >
              <Text style={[
                styles.categoryButtonText,
                selectedCategory === cat.id && styles.categoryButtonTextActive
              ]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.intro}>
            <Text style={styles.introText}>
              Experience the bold flavors, aromatic spices, and rich culinary traditions 
              that make Sri Lankan cuisine truly unique.
            </Text>
          </View>

          <View style={styles.foodsList}>
            {filteredFoods.map(renderFoodCard)}
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
    paddingBottom: 16,
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
  categoriesContainer: {
    paddingBottom: 16
  },
  categoriesScroll: {
    paddingHorizontal: 24,
    gap: 12
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  categoryButtonActive: {
    backgroundColor: '#8B4513',
    borderColor: '#8B4513'
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: '#666'
  },
  categoryButtonTextActive: {
    color: '#FFF'
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
  foodsList: {
    gap: 20
  },
  foodCard: {
    borderRadius: 20,
    backgroundColor: '#FFF',
    overflow: 'hidden' as const,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6
  },
  foodImage: {
    width: '100%',
    height: 200
  },
  foodContent: {
    padding: 20
  },
  foodHeader: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12
  },
  foodTitles: {
    flex: 1
  },
  foodName: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    letterSpacing: -0.3
  },
  foodNameSi: {
    fontSize: 15,
    color: '#8B6B47',
    fontWeight: '500' as const,
    marginTop: 4
  },
  spiceBadge: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginLeft: 12
  },
  spiceText: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: '600' as const,
    textTransform: 'capitalize' as const
  },
  foodDescription: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 16
  },
  ingredientsSection: {
    marginTop: 8
  },
  ingredientsTitle: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: '#666',
    marginBottom: 8
  },
  ingredientsContainer: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    gap: 8
  },
  ingredientBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#F5F5F0',
    borderWidth: 1,
    borderColor: '#E8E8E0'
  },
  ingredientText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500' as const
  }
});
