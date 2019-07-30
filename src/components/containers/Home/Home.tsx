import React, { useEffect, useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import AppContext from "../../../context/appContext";

const Home = () => {
    const appContext = useContext(AppContext);
    console.log(appContext)
    const { getRandomItems } = appContext;

    useEffect(() => {
        getRandomItems();
    }, []);
    console.log(appContext ? appContext.items : null);
    return (
        <View style={styles.container}>
            <Text>Ecommerce</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: "10%",
        paddingBottom: "20%",
        backgroundColor: "white",
        width: "100%"
    },
    titleText: {
        color: "#fff",
        fontSize: 30
    }
});

export default Home;
