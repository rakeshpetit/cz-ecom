import React, { useEffect, useContext } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import AppContext from "../../../context/appContext";
import * as Screens from "../Items";
import { StateType } from '../../../context/types'

type PropType = {
  navigation: any
}

const Home = (props: PropType) => {
    const appContext: StateType = useContext(AppContext);
    const { getRandomItems, items } = appContext;
    useEffect(() => {
        getRandomItems();
    }, []);
    // console.log(appContext ? appContext.items : null);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 8 }}>
                <Screens.Items items={items} {...props}/>
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
        backgroundColor: "white",
        width: "100%"
    },
    titleText: {
        color: "#fff",
        fontSize: 30
    }
});

export default Home;
