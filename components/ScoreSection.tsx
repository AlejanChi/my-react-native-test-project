import { styles } from "@/consts/styles";
import { useState } from "react";
import { View, Text, ViewStyle } from "react-native";

const ScoreSection = () => (
  <View style={styles.section}>
    {/* <Text style={styles.sectionTitle}>eospline score</Text> */}
    <View style={styles.scoreGrid}>
      {/* Columna izquierda */}
      <View style={styles.scoreColumn}>
        <ScoreItem label="Memory:" value="23%" />
        <ScoreItem label="Speed:" value="53%" />
      </View>
      
      {/* Columna derecha */}
      <View style={styles.scoreColumn}>
        <ScoreItem label="Percep:" value="81%" />
        <ScoreItem label="Logic:" value="73%" />
      </View>
    </View>
    <View style={styles.separator} />
  </View>
);


const ScoreItem = ({ label, value }: { label: string; value: string }) => {
    const percentage = parseInt(value);
    let borderColor = "#FF0000"; // Rojo por defecto (<35)
  
    if (percentage > 75) {
      borderColor = "#00FF00"; // Verde
    } else if (percentage > 35) {
      borderColor = "#FFFF00"; // Amarillo
    }
  
    return (
      <View style={[styles.scoreItem, { borderColor, borderWidth: 2 }]}>
        <View style={styles.scoreRow}>
          <Text style={styles.scoreLabel}>{label}</Text>
          <Text style={styles.scoreValue}>{value}</Text>
        </View>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { 
                width: `${percentage}%`,
                backgroundColor: borderColor // Color coherente con el borde
              } as ViewStyle
            ]} 
          />
        </View>
      </View>
    );
  };

export default ScoreSection;