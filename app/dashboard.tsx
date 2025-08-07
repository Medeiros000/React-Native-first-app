import { Button } from "@/components/button";
import { router } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Dashboard() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome to the Dashboard!</Text>
      <Button title="Go to Home" onPress={() => router.push("/")} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 32,
		backgroundColor: "#333333",
    gap: 16,
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#00ff0dff",
	},
});

