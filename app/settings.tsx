import { Button, StyleSheet, Text, View } from "react-native";

export default function Settings() {
  const triggerNotification = () => {
    alert("Test notification triggered!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>

      <Text>Notifications</Text>
      <Text>Account Settings</Text>
      <Text>Privacy</Text>

      <Button title="Trigger Test Notification" onPress={triggerNotification} />
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
