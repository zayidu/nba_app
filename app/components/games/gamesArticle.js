import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class GamesArticleComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Games Article</Text>
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

export default GamesArticleComponent;
