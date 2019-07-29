import React, { Component } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import { ABOUT_TEXT } from '../../../const'

type Props = {
    navigation?: any
};

export class About extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{ABOUT_TEXT.TITLE}</Text>
            <Button
                onPress={() => {
                    if (navigation) {
                        navigation.goBack();
                    }
                }}
                title='Back'
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 25,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
      }
});

export default About;