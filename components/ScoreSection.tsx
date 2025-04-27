import { styles } from "@/consts/styles";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, ViewStyle } from "react-native";

type scores = {
  memory:string,
  percep:string,
  speed:string,
  logic:string
}
const ScoreSection = (props:scores) => (
  <View style={styles.section}>
    {/* <Text style={styles.sectionTitle}>eospline score</Text> */}
    <View style={styles.scoreGrid}>
      {/* Columna izquierda */}
      <View style={styles.scoreColumn}>
        <ScoreItem label="Memory:" value={`${props.memory?props.memory:''}%`} icon="brain"/>
        <ScoreItem label="Speed:" value={`${props.speed?props.speed:''}%`} icon="hourglass-half"/>
      </View>
      
      {/* Columna derecha */}
      <View style={styles.scoreColumn}>
        <ScoreItem label="Percep:" value={`${props.percep?props.percep:''}%`} icon="lightbulb"/>
        <ScoreItem label="Logic:" value={`${props.logic?props.logic:''}%`} icon="puzzle-piece"/>
      </View>
    </View>
    <View style={styles.separator} />
  </View>
);


const ScoreItem = ({ label, value, icon }: { label: string; value: string, icon:string }) => {
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
          <View style={{flexDirection:"row", alignItems:"center",gap:4}}>
          <FontAwesome6 name={icon} size={16} color="black" />
          <Text style={styles.scoreLabel}>{label}</Text>
          </View>
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