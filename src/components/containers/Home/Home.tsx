import React, { useEffect, useContext } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import AppContext from "../../../context/appContext";
import * as Screens from "../Items";

const Home = () => {
    const appContext = useContext(AppContext);
    const { getRandomItems } = appContext;
    useEffect(() => {
        getRandomItems();
    }, []);
    // console.log(appContext ? appContext.items : null);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 8 }}>
                <Screens.Items />
            </View>
            <View style={{ flex: 1 }}>
                <Screens.Buttons />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        width: "100%"
    },
    titleText: {
        color: "#fff",
        fontSize: 30
    }
});

export default Home;
