import { Info, Globe, MapPin, Utensils, Sparkles } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>About</Text>
            <Text style={styles.headerSubtitle}>ගැන</Text>
          </View>

          <View style={styles.welcomeCard}>
            <View style={styles.iconCircle}>
              <Sparkles size={48} color="#D4692B" strokeWidth={2} />
            </View>
            <Text style={styles.welcomeTitle}>Welcome to Sri Lanka</Text>
            <Text style={styles.welcomeSubtitle}>
              Discover the Pearl of the Indian Ocean
            </Text>
            <Text style={styles.welcomeSubtitleSi}>
              ශ්‍රී ලංකාව - ඉන්දියන් සාගරයේ මුතු
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>What You&apos;ll Discover</Text>
            <Text style={styles.sectionTitleSi}>ඔබ සොයා ගන්නේ මොනවද</Text>
            
            <View style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <MapPin size={24} color="#D4692B" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Historical Places</Text>
                <Text style={styles.featureTitleSi}>ඓතිහාසික ස්ථාන</Text>
                <Text style={styles.featureDescription}>
                  Explore ancient temples, fortresses, and UNESCO World Heritage sites
                </Text>
              </View>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <Utensils size={24} color="#D4692B" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Sri Lankan Cuisine</Text>
                <Text style={styles.featureTitleSi}>ශ්‍රී ලාංකික ආහාර</Text>
                <Text style={styles.featureDescription}>
                  Taste authentic rice and curry, hoppers, and traditional sweets
                </Text>
              </View>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <Globe size={24} color="#D4692B" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Rich Culture</Text>
                <Text style={styles.featureTitleSi}>පොහොසත් සංස්කෘතිය</Text>
                <Text style={styles.featureDescription}>
                  Learn about ancient traditions, festivals, and religious heritage
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.aboutSection}>
            <Text style={styles.sectionTitle}>About This App</Text>
            <Text style={styles.sectionTitleSi}>මෙම යෙදුම ගැන</Text>
            
            <View style={styles.aboutCard}>
              <View style={styles.aboutRow}>
                <Info size={18} color="#D4692B" />
                <Text style={styles.aboutText}>
                  This app is your complete guide to Sri Lankan tourism, featuring historical sites, local cuisine, cultural insights, and travel routes.
                </Text>
              </View>
              <Text style={styles.aboutTextSi}>
                මෙම යෙදුම ශ්‍රී ලංකා සංචාරක ක්‍ෂේත්‍රය සඳහා ඔබේ සම්පූර්ණ මාර්ගෝපදේශකය වේ. ඓතිහාසික ස්ථාන, දේශීය ආහාර, සංස්කෘතික තොරතුරු සහ සංචාරක මාර්ග ඇතුළත් වේ.
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Discover the beauty of Sri Lanka
            </Text>
            <Text style={styles.footerTextSi}>
              ශ්‍රී ලංකාවේ සුන්දරත්වය සොයන්න
            </Text>
            <Text style={styles.version}>Version 1.0.0</Text>
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
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFF4ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#D4692B'
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    paddingBottom: 40
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24
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
  welcomeCard: {
    marginHorizontal: 24,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.5
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 4
  },
  welcomeSubtitleSi: {
    fontSize: 14,
    color: '#8B6B47',
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '500' as const
  },
  infoSection: {
    marginHorizontal: 24,
    marginTop: 32
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    marginBottom: 4,
    letterSpacing: -0.3
  },
  sectionTitleSi: {
    fontSize: 15,
    color: '#8B6B47',
    marginBottom: 16,
    fontWeight: '500' as const
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFF4ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  featureContent: {
    flex: 1
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: '#1A1A1A',
    marginBottom: 2
  },
  featureTitleSi: {
    fontSize: 13,
    color: '#8B6B47',
    marginBottom: 6,
    fontWeight: '500' as const
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20
  },
  aboutSection: {
    marginHorizontal: 24,
    marginTop: 32
  },
  aboutCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4
  },
  aboutRow: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 12
  },
  aboutText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    lineHeight: 22
  },
  aboutTextSi: {
    fontSize: 13,
    color: '#8B6B47',
    lineHeight: 20,
    fontWeight: '500' as const
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 24
  },
  footerText: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center'
  },
  footerTextSi: {
    fontSize: 14,
    color: '#8B6B47',
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '500' as const
  },
  version: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 8
  }
});
