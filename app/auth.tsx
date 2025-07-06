import { KeyboardAvoidingView, Platform, View, Text, StyleSheet } from "react-native";

export default function AuthScreen() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}  // Added to ensure full-screen coverage
        >
            <View style={styles.innerContainer}>  // Added for better content positioning
                <Text style={styles.text}>Create Account</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

// Styles for layout and presentation
const styles = StyleSheet.create({
    container: {
        flex: 1,  // Makes KeyboardAvoidingView cover the entire screen
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",  // Centers content vertically
        alignItems: "center",      // Centers content horizontally
    },
    text: {
        fontSize: 24,  // Improves text visibility
    },
});