import { StyleSheet, Text, View } from "react-native";

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>

      <Text>Item Name: Sample Item</Text>
      <Text>Description: This is a sample detail page.</Text>
      <Text>Price: $10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
});
