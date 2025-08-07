import { View, Text, StyleSheet, Alert, TouchableOpacity, Platform } from "react-native";
import { Button } from "@/components/button";
import { Input } from "@/input";
import React, { useState } from "react";
import { router } from "expo-router";

export default function Index() {
	const [name, setName] = useState("guest");

	function handleNext() {
		router.push("/dashboard");
		console.log("Button clicked!!");
	}

	function handleInputChange(text: string) {
		console.log(`Input changed: ${text}`);
		setName(text);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello, {name}!</Text>
			<Button title="continue" onPress={handleNext} />
			<Input placeholder="Type something..." onChangeText={handleInputChange} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#333333",
		gap: 16,
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#00ff0dff",
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContent: {
		backgroundColor: "#ffffff",
		borderRadius: 10,
		padding: 24,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalTitle: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 12,
		color: "#333333",
	},
	openButton: {
		backgroundColor: "#00ff0dff",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
		marginTop: 20,
		minWidth: 150,
		alignItems: "center",
	},
	closeButton: {
		backgroundColor: "#333333",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 8,
		marginTop: 16,
	},
	openButtonText: {
		color: "#333333",
		fontSize: 18,
		fontWeight: "bold",
	},
	closeButtonText: {
		color: "#ffffff",
		fontSize: 16,
		fontWeight: "bold",
	},
	modalText: {
		fontSize: 16,
		color: "#333333",
		marginBottom: 8,
		textAlign: "center",
	},
});
