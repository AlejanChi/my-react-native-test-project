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
import ProgressSection from "./dashboard/ProgressSection";
import FocusSection from "./dashboard/FocusSection";
import ScoreSection from "./dashboard/ScoreSection";
import GameSection from "./dashboard/GameSection";
import PlayBtn from "./LetsPlayBtn";
import { FaBrain } from "react-icons/fa6";

// Componente principal
export const ProgressDashboard = () => {
  const [randomNumber, setRandomNumber] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const newData = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setRandomNumber(newData);
  }, []);
  return (
    <View>
      <ProgressSection value={randomNumber[1].toString()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Sección de enfoque */}
        <FocusSection />

        {/* Sección de puntuación */}
        <ScoreSection
          logic={randomNumber[0].toString()}
          memory={randomNumber[1].toString()}
          percep={randomNumber[2].toString()}
          speed={randomNumber[3].toString()}
        />

        {/* Juego */}
        <GameSection />
      </ScrollView>
    </View>
  );
};

// Componente: Juego
