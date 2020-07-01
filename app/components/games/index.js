import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class GamesComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Games</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
});

export default GamesComponent;
