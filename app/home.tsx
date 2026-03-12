import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { fetchPosts } from "../services/apiService";
import { getData, saveData } from "../storage/storage";

export default function Home() {
  const [storedValue, setStoredValue] = useState("");
  const [posts, setPosts] = useState<any[]>([]);

  const handleSave = async () => {
    await saveData("username", "John Doe");
    alert("Data saved to local storage");
  };

  const handleLoad = async () => {
    const value = await getData("username");
    if (value) setStoredValue(value);
  };

  const loadAPI = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Link href="/settings">
        <Text style={{ fontSize: 20 }}>⚙️ Settings</Text>
      </Link>

      <Button title="Save Data" onPress={handleSave} />
      <Button title="Load Data" onPress={handleLoad} />

      <Text>Stored value: {storedValue}</Text>

      <Button title="Load API Data" onPress={loadAPI} />

      {posts.map((post) => (
        <Text key={post.id}>{post.title}</Text>
      ))}
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
