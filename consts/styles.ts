import { StyleSheet } from "react-native";

const fontSizes = {
    size_1: 16,
    size_2:20,
    size_3:32
}

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    // borderRadius: 12,
    padding: 30,
    // margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  headerBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    marginBottom: 12,
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
  },
  header: {
    fontSize: fontSizes.size_3,
    fontWeight: "bold",
    color: "#333",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: fontSizes.size_2,
    fontWeight: "900",
    color: "#444",
    marginBottom: 12,
  },
  cyanBox: {
    backgroundColor: "#00C7BE",
    borderRadius: 16,
    padding: 16,
  },
  progressText: {
    color: "#666",
    fontSize: fontSizes.size_1,
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 16,
  },

  progressBarBase: {
    width: "100%",
    height: 15,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  progressBarFill: {
    // width:'100%',
    height: 15,
    backgroundColor: "#1D4ABD",
    borderRadius: 16,
    padding: 3,
  },
 


  //ESTILOS DE LA GRAFICA
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  dayNumber: {
    fontSize: fontSizes.size_1,
    fontWeight: "500",
    color: "#2d3436",
  },
  numbersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 27,
    justifyContent: "space-between",
    marginVertical: 16,
    // marginHorizontal:"auto"
  },
  gridNumber: {
    // width: '10%',
    textAlign: "center",
    fontSize: fontSizes.size_1,
    color: "#636e72",
    marginBottom: 8,
  },
  metricsContainer: {
    marginTop: 20,
  },
  scoreTitle: {
    fontSize: fontSizes.size_1,
    color: "#2d3436",
    fontWeight: "600",
    marginBottom: 12,
    alignSelf:'center'
  },
  barsContainer: {
    flexDirection: "row",
    // gap:27,
    justifyContent: "space-between",
    width: "100%",
    // marginHorizontal: "auto"
  },
  barWrapper: {
    width: 10,
    height: 100,
    justifyContent: "flex-end",
    backgroundColor: "#D6DBED",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  bar: {
    // height: '100%',
    width: 10,
    backgroundColor: "#00C7BE",
    borderRadius: 16,
  },

  scoreGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  scoreColumn: {
    width: '48%', // Para dejar espacio entre columnas
  },
  scoreItem: {
    marginBottom: 16,
    borderRadius: 16,
    borderBottomWidth: 10,
    padding: 8
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  scoreLabel: {
    fontSize: fontSizes.size_2,
    color: '#000',
  },
  scoreValue: {
    fontSize: fontSizes.size_2,
    color: '#000',
    fontWeight: 'bold',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#EDF2F7',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00C7BE',
    borderRadius: 2,
  },


  //SECCION DE ULTIMO JUEGO JUGADO
  gameContainer: {
    // flex: 1,
    // position: 'relative',
  },
  imageContainer: {
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    // overflow: 'hidden',
    marginBottom: 16,
  },
  gameImage: {
    width: '100%',
    height: '100%',
  },
  floatingButton: {
    position: 'absolute',
    // width: 'auto',
    bottom: 30,
    right: 20,
    borderWidth: 6,
    borderColor: 'white',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 25,
    elevation: 15,
    backgroundColor:'#00C7BE'
  },
  buttonText: {
    color: 'white',
    fontSize: fontSizes.size_3, // Usando la variable definida
    fontWeight: 'bold',
  },



  //ESTILOS DE LA BARRA INFERIOR
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 8,
  },
  bottomText: {
    fontSize: 16,
    color: '#333',
  },
});
