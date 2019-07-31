import React from "react";
import { StyleSheet, View } from "react-native";
import AppRoute from "./components/routes/Routes";
import AppState from "./context/appState";

const App = () => {
    return (
        <AppState>
            <View style={styles.container}>
                <AppRoute />
            </View>
        </AppState>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
