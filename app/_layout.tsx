import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: "#333",
				},
				headerTintColor: "#41ff7dff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen
				name="index"
				options={{ 
					title: "Home"
				}}
			/>
		</Stack>
	);
}
