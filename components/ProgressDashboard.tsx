import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { styles } from "@/consts/styles";
import ProgressSection from "./ProgressSection";
import FocusSection from "./FocusSection";
import ScoreSection from "./ScoreSection";
import GameSection from "./GameSection";
import PlayBtn from "./LetsPlayBtn";
import { FaBrain } from "react-icons/fa6";

// Componente principal
export const ProgressDashboard = () => {
  const [randomNumber,setRandomNumber] = useState<number[]>([0,0,0,0])
  
  useEffect(()=>{
    const newData = Array.from({ length: 4 }, () => 
      Math.floor(Math.random() * 100) + 1
    );
    setRandomNumber(newData)
  },[])
  return (
    <SafeAreaView style={[styles.container]}>
      {/* Header Fijo */}
      <View style={styles.headerBlock}>
        <View style={{ alignItems: "center", flexDirection: "row", gap: 6 }}>
          <AntDesign name="star" size={32} color="#FDD835" />
          <Text style={styles.header}>12</Text>
        </View>
        <View style={{ alignItems: "center", flexDirection: "row", gap: 6 }}>
          <FontAwesome6 name="brain" size={32} color="#FFB3B3" />
          <Text style={styles.header}>{randomNumber[1].toString()}%</Text>
        </View>
      </View>

      {/* Header */}

      {/* Sección de progreso diario */}
      <ProgressSection value={randomNumber[1].toString()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Sección de enfoque */}
        <FocusSection />

        {/* Sección de puntuación */}
        <ScoreSection logic={randomNumber[0].toString()} memory={randomNumber[1].toString()} percep={randomNumber[2].toString()} speed={randomNumber[3].toString()} />

        {/* Juego */}
        <GameSection />
      </ScrollView>
      <PlayBtn />

      {/* Barra Inferior Fija */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomText}>
          <Ionicons name="game-controller" size={32} color="#757575" />
        </Text>
        <Text style={styles.bottomText}>
          <Entypo name="trophy" size={32} color="#FDD835" />
        </Text>
        <Text style={styles.bottomText}>
          <Ionicons name="bar-chart" size={32} color="#00C7BE" />
        </Text>
        <Text style={styles.bottomText}>
          <FontAwesome6 name="gear" size={32} color="#757575" />
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Componente: Juego
