import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/consts/styles';
import ProgressSection from './ProgressSection';
import FocusSection from './FocusSection';
import ScoreSection from './ScoreSection';
import GameSection from './GameSection';

// Componente principal
export const ProgressDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
    {/* Header Fijo */}
      <View style={styles.headerBlock}>
        <Text style={styles.header}>12</Text>
        <Text style={styles.header}>75%</Text> 
        </View>
    <ScrollView style={{flex:1}} contentContainerStyle={{ paddingTop: 16,
    paddingBottom: 80,}}>
        
      {/* Header */}
      
      {/* Sección de progreso diario */}
      <ProgressSection value={'75'}/>
      
      {/* Sección de enfoque */}
      <FocusSection />
      
      {/* Sección de puntuación */}
      <ScoreSection />
      
      {/* Juego */}
      <GameSection />
    </ScrollView>

     {/* Barra Inferior Fija */}
     <View style={styles.bottomBar}>
        <Text style={styles.bottomText}>Inicio</Text>
        <Text style={styles.bottomText}>Perfil</Text>
        <Text style={styles.bottomText}>Ajustes</Text>
      </View>
    </SafeAreaView>
  );
};


// Componente: Juego


