import { styles } from "@/consts/styles";
import { View, Text, TouchableOpacity } from "react-native";
import Metrics from "./Metrics";
import { useState } from "react";

const FocusSection = () => {
  const [selectedDays, setSelectedDays] = useState<number>(10);
  const [generatedData, setGeneratedData] = useState<number[]>([]);

  // Función para generar datos aleatorios
  const generateRandomData = (days: number) => {
    const newData = Array.from({ length: days }, () => 
      Math.floor(Math.random() * 100) + 1
    );
    setGeneratedData(newData);
    setSelectedDays(days);
  };

  return (
    <View style={[styles.section, { marginTop: 20 }]}>
      <Text style={[styles.sectionTitle, { fontFamily: 'Jersey20' }]}>
        Your focus for last:
      </Text>

      <View style={styles.daysRow}>
        {[10, 20, 30].map((days) => (
          <TouchableOpacity
            key={days}
            onPress={() => generateRandomData(days)}
            style={[
              styles.dayButton,
              selectedDays === days && styles.selectedDayButton
            ]}
          >
            <Text style={[
              styles.dayNumber,
              selectedDays === days && styles.selectedDayText
            ]}>
              {days} days
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Metrics data={generatedData.length > 0 ? generatedData : 
        Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1)} 
      />

      <View style={styles.separator} />
    </View>
  );
};

export default FocusSection;