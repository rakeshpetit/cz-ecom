import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppRoute from './components/routes/Routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppRoute />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
