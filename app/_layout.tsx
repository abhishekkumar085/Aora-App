import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aora!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
  }

})
