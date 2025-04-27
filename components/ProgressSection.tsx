import { styles } from "@/consts/styles";
import { useState } from "react";
import { View, Text, ViewStyle } from "react-native";

const ProgressSection = ({value}:{value:string}) =>{ 
  const percentage = parseInt(value);
  let fillColor = "#FF0000"; // Rojo por defecto (<35)

  if (percentage > 75) {
    fillColor = "#1D4ABD"; // Verde
  } else if (percentage > 35) {
    fillColor = "#FFFF00"; // Amarillo
  }
  return(<View style={styles.cyanBox}>
    <Text style={[styles.sectionTitle, {color:"#fff"}]}>Today progress:</Text>
    <Text style={[styles.progressText, {color:"#fff", fontWeight:"bold"},{alignSelf:'flex-end'}]}>{percentage>0? `${value}% complete` : "No job completed today."}</Text>
    <View style={[styles.progressBarBase,{marginTop:12}]}>
    <View style={[styles.progressBarFill,{ width: `${value}%`,backgroundColor:fillColor } as ViewStyle]} />
    </View>
  </View>)
};

export default ProgressSection