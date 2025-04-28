import { styles } from "@/consts/styles";
import { useState } from "react";
import { FlatList, View, Text, ScrollView, TouchableOpacity } from "react-native";

type barData = {
  data:number[]
}
const Metrics = (props:barData) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [positions, setPositions] = useState<{ [key: number]: { x: number, y: number } }>({});

  const handleBarPress = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const handleLayout = (index: number, event: any) => {
    const { x, y } = event.nativeEvent.layout;
    setPositions(prev => ({ ...prev, [index]: { x, y } }));
  };

  return (
    <View style={styles.metricsContainer}>
       <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
      <View style={[styles.barsContainer]}>
        {props.data.map((value, index) => (
           <TouchableOpacity
           key={index}
           onPress={() => handleBarPress(index)}
           onLayout={(e) => handleLayout(index, e)}
           activeOpacity={0.7}
         >
           <View style={styles.barColumn}>
             <View style={styles.barWrapper}>
               <View style={[styles.bar, { height: `${value}%` }]} />
             </View>
             <Text style={styles.gridNumber}>{index + 1}</Text>
             
             {selectedIndex === index && (
               <View style={[
                 styles.tooltip,
                 { 
                   bottom: (positions[index]?.y || 0) + 100 
                 }
               ]}>
                 <Text style={styles.tooltipText}>{value}%</Text>
                 <View style={styles.tooltipPointer} />
               </View>
             )}
           </View>
         </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
      
      <Text style={styles.scoreTitle}>
        cognitive score{" "}
        <View
          style={[
            { backgroundColor: "#00C7BE" },
            { width: 12 },
            { height: 12 },
          ]}
        ></View>
      </Text>
    </View>
  );
};

export default Metrics;
