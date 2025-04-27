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
          source={{ uri: "#" }}
          style={styles.gameImage}
          resizeMode="cover"
        />
      </View>

      {/* Botón flotante */}
      <TouchableHighlight
        underlayColor={"#0DEFE5"}
        style={[styles.floatingButton]}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Ionicons name="play" size={32} color="white" />
          <Text style={styles.buttonText}>Let's play</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default GameSection;
