import { styles } from "@/consts/styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableHighlight, View, Image, Text } from "react-native";

const GameSection = () => {
  return (
    <View style={styles.gameContainer}>
      {/* Contenedor de la imagen */}
      <Text style={styles.sectionTitle}>Last Game played:</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://i.pinimg.com/736x/e0/c5/c0/e0c5c0e95d4fd726c2915869dc5c2b77.jpg" }}
          style={styles.gameImage}
          resizeMode="cover"
        />
        <Text style={styles.gameLabel}>Puzzle</Text>
      </View>
      {/* Botón flotante */}
      
    </View>
  );
};

export default GameSection;
